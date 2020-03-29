import React from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Record from './components/Record';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MicRecorder from 'mic-recorder-to-mp3';

import './App.css';

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Intro/>
                <Record/>
            </div>
        );
    }
}

export default App;
