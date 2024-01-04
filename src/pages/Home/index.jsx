import Accomodation from "./Accomodation"
import HeroSection from "./HeroSection"
import SpecialOffers from "./SpecialOffers"
import Welcome from "./Welcome"

const AboutUs = () =>{
    return(
        <div>
            <HeroSection />
            <Welcome />
            <SpecialOffers />
            <Accomodation />
        </div>
    )
}

export default AboutUs