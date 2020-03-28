import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav style={navStyle} className="navbar">
                <a className="navbar-brand" href="#"><h2>Moodify</h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

            </nav>
        )
    }
}

const navStyle = {
    color: '#595959',
    textAlign: 'center',
    padding: '20px',
    border: 'thick solid #595959',
    marginTop: '1px',
    position: 'sticky',
};


export default Navbar;