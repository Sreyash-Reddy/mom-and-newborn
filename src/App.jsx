import {useEffect, useRef, useState} from 'react';
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import {Services_Mother} from "./components/Services_Mother.jsx";
import {Services_Newborn} from "./components/Services_Newborn.jsx";

function App() {
    const [headerBackground, setHeaderBackground] = useState('transparent');
    const [headerTop, setHeaderTop] = useState('50px')
    const [headerHeight, setHeaderHeight] = useState('200px')
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceMotherRef = useRef(null);
    const serviceNewbornRef = useRef(null);
    const [currentSection, setCurrentSection] = useState('home'); // Track current section

    const scrollToSection = (section) => {
        // const targetRef = section === 'home' ? homeRef : aboutRef;
        let targetRef = null;
        if (section === 'home'){
            targetRef = homeRef;
        }
        else if (section === 'about'){
            targetRef = aboutRef;
        }
        else if (section === 'services-mother'){
            targetRef = serviceMotherRef;
        }
        else {
            targetRef = serviceNewbornRef;
        }
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (homeRef.current && aboutRef.current) {
                const homeTop = homeRef.current.offsetTop;
                const aboutTop = aboutRef.current.offsetTop;
                const serviceMotherTop = serviceMotherRef.current.offsetTop;
                const serviceNewbornTop = serviceNewbornRef.current.offsetTop;
                const scrollTop = document.documentElement.scrollTop;

                // Determine current section based on scroll position
                let newSection = '';

                if (scrollTop < (aboutTop - homeTop) / 2) {
                    newSection = 'home';
                } else if (scrollTop < (serviceMotherTop - aboutTop) / 2 + aboutTop) {
                    newSection = 'about';
                } else if (scrollTop < (serviceNewbornTop - serviceMotherTop) / 2 +  serviceMotherTop ){
                    newSection = 'services-mother';
                }
                else {
                    newSection = 'services-newborn';
                }


                // Only update state and scroll if the section changes
                if (newSection !== currentSection) {
                    setCurrentSection(newSection);
                    scrollToSection(newSection);
                    if (newSection === 'home'){
                        setHeaderBackground('transparent')
                        setHeaderTop('50px')
                        setHeaderHeight('200px')
                    }else{
                        setHeaderBackground('rgba(197, 105, 5, 0.75)')
                        setHeaderTop('20px')
                        setHeaderHeight('100px')
                    }
                }

            }
        };



        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Clean up
    }, [currentSection]);

    return(
        <>
            <Header background={headerBackground} top={headerTop} height={headerHeight}/>
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={aboutRef}>
                <AboutUs/>
            </div>
            <div ref={serviceMotherRef}>
                <Services_Mother/>
            </div>
            <div ref={serviceNewbornRef}>
                <Services_Newborn/>
            </div>
        </>
    )
}

export default App;
