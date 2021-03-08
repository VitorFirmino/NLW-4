import React from 'react';
import { FaHome, FaMedal } from 'react-icons/fa'

import styles from './styles.module.css'

const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>

            <div className={styles.logo}>
                <img src="icons/logobar.svg" alt="move-it"/>
            </div>

            <div className={styles.pages}>
                <div className={styles.option}>
                    <div className={styles.decoration} />
                    <FaHome size={30} 
                    style={{ cursor: 'pointer' }} />
                </div>

                <div className={styles.option}>
                    <FaMedal 
                    size={30}
                    style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
  );
}

export default SideBar;
