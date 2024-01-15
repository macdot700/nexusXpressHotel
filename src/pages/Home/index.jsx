import Accomodation from "./Accomodation"
import Dining from "./Dining"
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
            <Dining />
        </div>
    )
}

export default AboutUs