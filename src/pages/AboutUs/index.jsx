import { useEffect } from "react"
import HeroSection from "./HeroSection"
import Welcome from "./Welcome"

const AboutUs = () =>{

    useEffect(()=>{
        window.scroll(0, 0)
    }, [])
    return(
        <div>
            <HeroSection />
            <Welcome />

        </div>
    )
}

export default AboutUs