import React, { useState } from 'react';
import Img from '../../assets/youtube.jpg';
import Styles from './youtube.module.scss';
import { FaTimes } from 'react-icons/fa';

const Index: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className={Styles.main}>
      <img className={Styles.img} src={Img} onClick={togglePlayer} />
      {showPlayer && (
        <div className={Styles.videoPopup}>
          <div className={Styles.closeButton} onClick={togglePlayer}>
            <FaTimes />
          </div>
          <div className={Styles.videoContainer}>
            <iframe
              title="YouTube Video Player"
              width="800"
              height="500"
              src="https://www.youtube.com/embed/rR0GhcYb-zI?si=cGJTBxy03VOGSqiC"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
