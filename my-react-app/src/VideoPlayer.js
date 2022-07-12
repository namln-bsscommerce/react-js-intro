import { forwardRef, useImperativeHandle, useRef } from 'react';

import mainVideo from './media/video/La_do_em_xui_thoi.mp4';

function VideoPlayer(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play();
        },

        pause: () => {
            videoRef.current.pause();
        }
    }));

    return <video ref={videoRef} src={mainVideo} width="50%" />;
}

export default forwardRef(VideoPlayer);
