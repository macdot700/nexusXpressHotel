import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import location from "../../assets/images/location.svg";

const Map = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 my-[100px]">
      <div className="h-[360px] md:h-[690px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.911491037402!2d7.36734617569101!3d8.980291889748123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73001afb6b85%3A0x2cd3bcc52837dbc1!2sNexus%20Xpress%20Hotel!5e0!3m2!1sen!2sng!4v1705330742218!5m2!1sen!2sng"
        style={{ width: "100%", height: "100%" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>

      <div className="bg-contact_2_bg h-[360px] md:h-[690px] bg-cover bg-center w-full flex justify-center items-center">
        <div className="bg-[rgb(0,0,0)] flex flex-col gap-5 text-white p-4">
        <a
                href="tel:+234 806 779 2621"
                className="flex gap-4 items-center"
              >
                  <img src={phone} width="15" height="15" />
                <span>+234 806 779 2621</span>
              </a>
              <a
                href="mailto:nexusxpresshotel@gmail.com"
                className="flex gap-4 items-center"
              >
                <img src={email} width="15" height="15" />
                <span className="hidden lg:inline">nexusxpresshotel@gmail.com</span>
                <span className="inline lg:hidden">Send us a mail</span>
              </a>
              <a  className="flex gap-4 items-center" target="_blank" href="https://www.google.com/maps/place/Nexus+Xpress+Hotel,+9+Okada+Brg,+Lugbe+900107,+Federal+Capital+Territory/@8.9802866,7.3699211,17z/data=!4m6!3m5!1s0x104e73001afb6b85:0x2cd3bcc52837dbc1!8m2!3d8.9802866!4d7.3699211!16s%2Fg%2F11y2mr7s4l?hl=en-US">
              <img src={location} width="15" height="15" />
                <span className="flex flex-col">  <span>Nexus Xpress Hotel,</span>
              <span> 9, Okada Bridge Road, FHA, Lugbe, Abuja</span></span>
              </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
