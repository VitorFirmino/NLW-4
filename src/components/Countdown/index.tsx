import React, { useContext } from 'react';
import { MdClose, MdPlayArrow } from 'react-icons/md'
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './styles.module.css'



const Countdown: React.FC = () => {
  const { 
    minutes, 
    seconds, 
    isActive, 
    hasFinished, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  
  return (
    <div>
      <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondsLeft}</span>
        <span>{secondsRight}</span>
      </div>
    </div>

    {hasFinished ? (
      <button
      disabled
      className={styles.countdownButton}
    >
      Ciclo encerrado
      <img src="icons/check_circle.png" alt="Check Circle"/>
    </button>
    ) : (
      <>
      {isActive ? (
      <button
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={resetCountdown}
      >
        Abandonar ciclo
        <MdClose fontSize={24}/>
      </button>
    ) : (
      <button
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
        <MdPlayArrow fontSize={24} />
      </button>  
    )}
      </>
    )}

    </div>
  );
}

export default Countdown;
