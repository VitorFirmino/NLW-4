import React, { useContext } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './styles.module.css'

const Profile: React.FC = () => {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  const { level } = useContext(ChallengesContext)

  return (    
    <div className={styles.profileRow}>
      <div className={styles.profileContainer}>
        <img src="https://github.com/VitorFirmino.png" alt="Vitor Firmino"/>
        <div>
          <strong>Vitor Firmino</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </div>
      {currentTheme === 'theme-dark' ? <MdWbSunny onClick={toggleTheme} /> : <FaMoon color="#2E384D" onClick={toggleTheme} />}
    </div>
  );
}

export default Profile;
