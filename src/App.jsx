import {useEffect, useRef, useState} from 'react';
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import {Services_Mother} from "./components/Services_Mother.jsx";
import {Services_Newborn} from "./components/Services_Newborn.jsx";
function App() {
    const [headerBackground, setHeaderBackground] = useState('transparent');
    const [headerTop, setHeaderTop] = useState('50px');
    const [headerHeight, setHeaderHeight] = useState('200px');
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceMotherRef = useRef(null);
    const serviceNewbornRef = useRef(null);
    const [currentSection, setCurrentSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollToSection = (section) => {
        let targetRef = null;
        if (section === 'home') {
            targetRef = homeRef;
        } else if (section === 'about') {
            targetRef = aboutRef;
        } else if (section === 'services-mother') {
            targetRef = serviceMotherRef;
        } else {
            targetRef = serviceNewbornRef;
        }
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(scrollProgress);
            const homeTop = homeRef.current.offsetTop;
            const aboutTop = aboutRef.current.offsetTop;
            const serviceMotherTop = serviceMotherRef.current.offsetTop;
            const serviceNewbornTop = serviceNewbornRef.current.offsetTop;

            let newSection = '';

            if (scrollTop < aboutTop - (aboutTop - homeTop) / 2) {
                newSection = 'home';
            } else if (scrollTop < serviceMotherTop - (serviceMotherTop - aboutTop) / 2) {
                newSection = 'about';
            } else if (scrollTop < serviceNewbornTop - (serviceNewbornTop - serviceMotherTop) / 2) {
                newSection = 'services-mother';
            } else {
                newSection = 'services-newborn';
            }

            if (newSection !== currentSection) {
                setCurrentSection(newSection);
                if (newSection === 'home') {
                    setHeaderBackground('transparent');
                    setHeaderTop('50px');
                    setHeaderHeight('200px');
                } else {
                    setHeaderBackground('rgba(197, 105, 5, 0.75)');
                    setHeaderTop('20px');
                    setHeaderHeight('100px');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection]);

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: '5px',
                backgroundColor: 'white',
                zIndex: 1000
            }}></div>
            <Header background={headerBackground} top={headerTop} height={headerHeight}
                    onSectionClick={scrollToSection}/>
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
    );
}

export default App;
