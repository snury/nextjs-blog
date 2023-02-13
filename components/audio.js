import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styles from './audio.module.css';

export default function Audio(props) {
  return (
    <div className={styles.container} >
    <AudioPlayer
    src='https://yolopipe.com/wp-content/uploads/2022/06/Ed-Sheeran-Perfect.mp3'
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </div>
  );
}
