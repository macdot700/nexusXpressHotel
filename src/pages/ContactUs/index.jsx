import { useEffect } from "react"
import HeroSection from "./HeroSection"
import Map from "./Map"

const ContactUs = () =>{
    useEffect(()=>{
        window.scroll(0, 0)
    }, [])
    return(
        <div>
            <HeroSection />
            <Map />

        </div>
    )
}

export default ContactUs