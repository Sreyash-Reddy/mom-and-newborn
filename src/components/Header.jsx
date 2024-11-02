
import {useEffect, useState} from 'react';
// eslint-disable-next-line react/prop-types
export const Header = ({ background, top, height , onSectionClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [deviceForMenu, setDeviceForMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setDeviceForMenu(false);
                setMenuOpen(true)
            } else {
                setDeviceForMenu(true); // Hide menu by default on smaller screens
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header" style={{ backgroundColor: background, height: height }}>
            <div className="logo" style={{ top: top }}>
                <img src="/assets/logo.png" alt='logo' />
                <h1>MOM & NEWBORN</h1>
                <p className="subtext"><i>&#34; We Care for Better Motherhood & Newborn &#34;</i></p>
            </div>
            <div className="hamburger" onClick={toggleMenu} style={{top: top}}>&#9776;</div>
            <div className="navigation" style={{ top: menuOpen && deviceForMenu ? 0 : top , display: menuOpen ? 'flex' : 'none' }}>
                <ul>
                    <li onClick={() => onSectionClick('home')}><a>Home</a></li>
                    <li onClick={() => onSectionClick('about')}><a>About Us</a></li>
                    <li onClick={() => onSectionClick('services-mother')}><a>Our Services</a></li>
                    <li onClick={() => onSectionClick('services-newborn')}><a>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}
