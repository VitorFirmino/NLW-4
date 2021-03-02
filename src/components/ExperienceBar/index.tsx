import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css'

const ExperienceBar: React.FC = () => {
  const { currentExperience, experinceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100 / experinceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experinceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;
