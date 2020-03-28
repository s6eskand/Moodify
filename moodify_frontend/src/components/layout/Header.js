import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Moodify</h1>
            <h2>De-clutter your thoughts and get playlists based off your mood.</h2>
        </header>
    )
}

const headerStyle = {
    color: '#595959',
    textAlign: 'center',
    padding: '20px',
};


export default Header;