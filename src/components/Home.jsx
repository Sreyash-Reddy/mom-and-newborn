import {useEffect, useState} from "react";

export const Home = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Your Journey of Love and Care starts here ...";
    const typingSpeed = 25;

    useEffect(() => {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            setTypedText(fullText.slice(0, charIndex + 1));
            charIndex++;
            if (charIndex > fullText.length) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    return (<div className="home">
            <div className="home-image">
                <img src="/assets/body.jpg" alt='body'/>
                <div className="mask"></div>
                <div className="home-quotes">
                    <h2 className="start-quote">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"
                             viewBox="0 0 448 512">
                            <path fill="#ffffff"
                                  d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
                        </svg>
                    </h2>
                    <h1>{typedText}</h1>
                    <h2 className="end-quote">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"
                             viewBox="0 0 448 512">
                            <path fill="#ffffff"
                                  d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"/>
                        </svg>
                    </h2>
                </div>
            </div>
        </div>
    );
}