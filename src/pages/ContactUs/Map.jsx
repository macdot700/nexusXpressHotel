
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import location from "../../assets/images/location.svg";

const Map = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 my-[100px] max-w-[1990px] px-4 sm:px-10 lg:px-[48px] m-auto">
      <div className="h-[360px] md:h-[690px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.911491037402!2d7.36734617569101!3d8.980291889748123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73001afb6b85%3A0x2cd3bcc52837dbc1!2sNexus%20Xpress%20Hotel!5e0!3m2!1sen!2sng!4v1705330742218!5m2!1sen!2sng"
          style={{ width: "100%", height: "100%" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nexus Xpress Hotel location"
        ></iframe>
      </div>

      <div className="bg-contact_2_bg h-[360px] md:h-[690px] bg-cover bg-center w-full flex justify-center items-center">
        <div className="bg-black flex flex-col gap-5 text-white p-4">
          <a
            href="tel:+2348067792621"
            className="flex gap-4 items-center"
          >
            <img src={phone} width="15" height="15" alt="Phone" />
            <span>+234 806 779 2621</span>
          </a>

          <a
            href="mailto:nexusxpresshotel@gmail.com"
            className="flex gap-4 items-center"
          >
            <img src={email} width="15" height="15" alt="Email" />
            <span className="hidden lg:inline">
              nexusxpresshotel@gmail.com
            </span>
            <span className="inline lg:hidden">Send us a mail</span>
          </a>

          <a
            className="flex gap-4 items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps?q=8.980291889748123,7.36734617569101"
          >
            <img src={location} width="15" height="15" alt="Location" />
            <span className="flex flex-col">
              <span>Nexus Xpress Hotel,</span>
              <span>
                Plot 454, Cadastral Zone 07-07, Okada Bridge Road,
                Phase 1, F.H.A, Lugbe, Abuja, Nigeria.
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
