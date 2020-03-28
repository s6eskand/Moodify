import React from 'react';
import code from './images/—Pngtree—vector code optimization icon_4141289.png'

class Intro extends React.Component {
    render() {
        return (
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
                        <h3>Custom Playlists, tailored to your mood</h3>
                        <p>Blast the music, sing, dance, or cry</p>
                    </div>
                </div>
        )
    }
}

const introStyle = {
    color: '#595959',
    textAlign: 'center',
    marginTop: '50px'
};

const imgStyle = {
    width: '200px',
    height: '200px'
};

export default Intro;