import React from 'react';
import code from './images/—Pngtree—vector code optimization icon_4141289.png'
import {Link} from 'react-scroll';

class Intro extends React.Component {
    render() {
        return (
            <header>
                <div style={headerStyle} id="home">
                    <h1>Moodify</h1>
                    <h2>De-clutter your thoughts and get playlists based off your mood.</h2>
                </div>
                <div style={introStyle} className="row">
                    <div className="col-sm">
                        <img style={imgStyle} src="http://pngimg.com/uploads/brain/brain_PNG85.png" alt="brain"/>
                        <h3>Log your thoughts, take a recording</h3>
                        <p>Take a second to destress or just record a moment</p>
                    </div>
                    <div className="col-sm">
                        <img style={imgStyle} src={code} alt=""/>
                        <h3>Our powerful algorithms do the heavy-lifting for you</h3>
                        <p>Sit back, relax, and let the code do it's job</p>
                    </div>
                    <div className="col-sm">
                        <img style={imgStyle} src="https://www.netclipart.com/pp/f/213-2135792_like-music-it-can-change-your-mood-lautsprecherboxen.png" alt=""/>
                        <h3>Custom spotify playlists, tailored to your mood</h3>
                        <p>Blast the music, sing, dance, or cry</p>
                    </div>
                </div>
            </header>
        )
    }
}

const introStyle = {
    color: '#595959',
    textAlign: 'center',
    padding: '50px'
};

const imgStyle = {
    width: '200px',
    height: '200px'
};

const headerStyle = {
    color: '#595959',
    textAlign: 'center',
    padding: '50px',
};

export default Intro;