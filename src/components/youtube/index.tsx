import React, { useState } from 'react';
import Img from '../../assets/landscape/youtube.jpg';
import styles from './styles.module.scss';
import { FaTimes } from 'react-icons/fa';

interface prop {
  videolink?: string;
}

const Youtube: React.FC<prop> = ({ videolink }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <figure className={styles.main}>
      <img className={styles.img} src={Img} alt="YouTube Thumbnail" onClick={togglePlayer} />
      {showPlayer && (
        <div className={styles.videoPopup} onClick={togglePlayer}>
          <button className={styles.closeButton} onClick={togglePlayer}>
            <FaTimes />
          </button>
          <div className={styles.videoContainer}>
            <iframe
              title="YouTube Video Player"
              width="800"
              height="500"
              src={videolink}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </figure>
  );
};

export default Youtube;
