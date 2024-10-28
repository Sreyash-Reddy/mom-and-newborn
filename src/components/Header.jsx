// eslint-disable-next-line react/prop-types
export const Header = ({ background , top , height}) => {
    return (<div className="header" style={{ backgroundColor: background , height: height }}>
        <div className="logo" style={{ top: top }}>
            <img src="/assets/logo.png" alt='logo'/>
            <h1>MOM & NEWBORN</h1>
        </div>
        <div className="navigation" style={{ top: top }}>
            <ul>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Our Services</a></li>
                <li><a>Contact Us</a></li>
            </ul>
        </div>
    </div>);
}