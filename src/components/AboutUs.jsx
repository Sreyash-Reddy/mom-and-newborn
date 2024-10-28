import {useEffect, useRef, useState} from "react";

export const AboutUs = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "We care for better motherhood & newborn";
    const typingSpeed = 25;
    const aboutUsRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.5) {
                    let charIndex = 0;
                    const typingInterval = setInterval(() => {
                        setTypedText(fullText.slice(0, charIndex + 1));
                        charIndex++;
                        if (charIndex > fullText.length) {
                            clearInterval(typingInterval);
                        }
                    }, typingSpeed);

                    return () => clearInterval(typingInterval);
                }
            },
            {
                threshold: 0.5,
            }
        );


        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }


        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);


    return (<div className="aboutus" ref={aboutUsRef}>
            <div className="aboutus-heading">
                <h1>ABOUT US</h1>
            </div>
            <div className="aboutus-body">
                <div className="aboutus-image">
                    <div className="background-mask mask1"></div>
                    <div className="background-mask mask2"></div>
                    <div className="background-mask mask3"></div>
                    {/*<div className="background-mask mask4"></div>*/}
                    {/*<div className="background-mask mask5"></div>*/}
                    {/*<div className="background-mask mask6"></div>*/}
                    {/*<div className="background-mask mask7"></div>*/}
                    {/*<div className="background-mask mask8"></div>*/}
                    {/*<div className="background-mask mask9"></div>*/}
                    <img src="/assets/logo1.png"/>
                </div>
                <div className="aboutus-description">
                    <h1>MOM & NEWBORN</h1>
                    <h4>{typedText}</h4>
                    <div className="wrapper">
                        <h2 className="start-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"
                                 viewBox="0 0 448 512">
                                <path fill="rgba(197, 105, 5, 1)"
                                      d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
                            </svg>
                        </h2>
                        <h2>Adjusting to life with a newborn is both beautiful and challenging, and at <b>Mom & Newborn</b>, we are here to support you every step of the way. Our team understands the needs of mothers and their little ones, providing compassionate care to help you through this special time. Every mother and baby deserves quality care after childbirth, and we are committed to offering the guidance you need to maintain a healthy lifestyle with nurturing, traditional care tailored to you and your baby’s well-being.</h2>
                        <h2 className="end-quote">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"
                                 viewBox="0 0 448 512">
                                <path fill="rgba(197, 105, 5, 1)"
                                      d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"/>
                            </svg>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}