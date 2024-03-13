import React, { useState } from 'react';
import Img from '../../assets/landscape/youtube.jpg';
import styles from './styles.module.scss';
import { FaTimes } from 'react-icons/fa';

interface prop{
  videolink?:string
}
const Youtube: React.FC<prop> = ({videolink}) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className={styles.main}>
      <img className={styles.img} src={Img} onClick={togglePlayer} />
      {showPlayer && (
        <div className={styles.videoPopup} onClick={togglePlayer}>
          <div className={styles.closeButton} onClick={togglePlayer}>
            <FaTimes />
          </div>
          <div className={styles.videoContainer} >
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
    </div>
  );
};

export default Youtube;
