import { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

import './App.css';

function App() {
    const videoRef = useRef();

    const play = () => {
        videoRef.current.play();
    };

    const pause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="App">
            <VideoPlayer ref={videoRef} />
            <button className="btn" onClick={play}>
                Play
            </button>
            <button className="btn" onClick={pause}>
                Pause
            </button>
        </div>
    );
}

export default App;
