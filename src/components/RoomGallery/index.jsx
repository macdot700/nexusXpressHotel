
import { useState } from "react";

const RoomGallery = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images.length) return null;

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="w-full">
      {/* Main photograph */}
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative block w-full cursor-zoom-in bg-gray-100"
        aria-label={`Enlarge ${title} photograph`}
      >
        <img
          src={images[activeImage]}
          alt={`${title}, photo ${activeImage + 1}`}
          className="h-[350px] w-full object-contain sm:h-[450px] lg:h-[560px]"
        />

        <span className="absolute bottom-3 right-3 bg-brand-deepBlue/90 px-3 py-2 text-xs font-semibold text-white opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {/* Clickable thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`View ${title} photo ${index + 1}`}
              aria-pressed={activeImage === index}
              className={`overflow-hidden border-2 transition-colors ${
                activeImage === index
                  ? "border-brand-blue"
                  : "border-transparent hover:border-brand-purple"
              }`}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="h-20 w-full object-cover sm:h-24"
              />
            </button>
          ))}
        </div>
      )}

      {/* Full-screen photo viewer */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 z-10 px-3 py-2 text-3xl text-white"
            aria-label="Close photo viewer"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 z-10 px-3 py-4 text-3xl text-white sm:left-6"
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <img
            src={images[activeImage]}
            alt={`${title}, photo ${activeImage + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 z-10 px-3 py-4 text-3xl text-white sm:right-6"
            aria-label="Next photo"
          >
            &#8250;
          </button>

          <p className="absolute bottom-4 text-sm text-white">
            {activeImage + 1} of {images.length} photos
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomGallery;
