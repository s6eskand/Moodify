import React from 'react';
import './buttons.css';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        };
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }

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
                        <button className="btnStart" onClick={this.start} disabled={this.state.isRecording}>START RECORDING</button>
                        <button className="btnStop" onClick={this.stop} disabled={!this.state.isRecording}>STOP RECORDING</button>
                    </div>
                </div>
                <div style={child} id="record" className="row">
                    <div className="col-12">
                        <audio src={this.state.blobURL} id="vid2" controls="controls"/>
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