import { useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection"
import Info from "../container/InfoContainer";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info />
        </>
    )
}