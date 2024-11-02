import { useState } from "react";

import Sidebar from "../../../components/Sidebar"
import Navbar from "../../../components/Navbar/Navbar"
import HeroSection from "../components/HeroSection";
import Intro from "../components/Abouts/intro";
// import Footer from "../../../components/Footer";

export default function WomenHomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Intro />
            


        </>
    )
}