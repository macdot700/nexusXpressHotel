
const PageHeroTitle = ({ children, className = "" }) => {
  return (
    <h1
      className={`inline-block bg-brand-deepBlue/95 px-5 py-3 font-display text-3xl font-semibold leading-tight text-white shadow-md sm:px-6 sm:py-4 sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default PageHeroTitle;
