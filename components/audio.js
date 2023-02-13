import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Audio(props) {
  return (
    <div className='Audio'>
      <AudioPlayer
    autoPlay
    src='https://yolopipe.com/wp-content/uploads/2022/06/Ed-Sheeran-Perfect.mp3'
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </div>
  );
}
