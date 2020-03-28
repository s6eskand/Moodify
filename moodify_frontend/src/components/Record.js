import React from 'react';
import './buttons.css';

class Record extends React.Component {
    render() {
        return (
            <div style={recordStyle} className="container">
                <div id="record" className="row">
                    <div style={child} className="col-12">
                        <p>Simply grab a pair of headphones, hit record when ready, and stop when finished.
                            <br/>
                            It's that simple.
                        </p>
                    </div>
                </div>
                <div id="record" className="row">
                    <div style={child} className="col-12">
                        <button className="btnStart">START RECORDING</button>
                        <button className="btnStop">STOP RECORDING</button>
                    </div>
                </div>
                <div style={child} id="record" className="row">
                    <div className="col-12">
                        <audio id="vid2" controls/>
                    </div>
                </div>
            </div>
        )
    }
}

const recordStyle = {
    color: '#595959',
    padding: '50px',
    textAlign: 'center'
};

const child = {
    padding: '25px',
    textAlign: 'center'
};

export default Record;