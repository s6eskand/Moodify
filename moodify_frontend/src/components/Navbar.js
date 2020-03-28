import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

class Navbar extends React.Component {
    render() {
        return (
            <nav style={navStyle} className="navbar sticky-top navbar-expand-lg">
                <Link className="navbar-brand" onClick={() => scroll.scrollToTop()}><h2>Moodify</h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="record" smooth={true} duration={1500}>Get Started
                            <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="#" smooth={true} duration={1500}>Features</Link>
                        <Link className="nav-item nav-link" to="#" smooth={true} duration={1500}>Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

const navStyle = {
    color: '#595959',
    padding: '20px',
    border: 'thick solid #595959',
    marginTop: '1px',
};


export default Navbar;