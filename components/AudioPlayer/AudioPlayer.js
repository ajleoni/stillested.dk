import React from "react";
import styles from './AudioPlayer.module.css';

export const AudioPlayer = ({source, trackName}) => {
  return (
      <>
        <div className={styles.audioPlayer}>
          <div className={styles.audioTitle}>
            <p>{trackName}</p>
            <audio src={source} controls></audio>
          </div>
          
          </div> 
      </>
    );
}; 