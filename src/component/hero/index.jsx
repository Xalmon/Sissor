import React from 'react'
import styles from '../hero/index.module.css'

const Hero = () => {
  return (
    <div className={styles.heroSectionDiv}>
        <p className={styles.oneStop}>
        One Stop. <br />Four <span>Possibilities</span>.
        </p>
        <div>
            <p className={styles.boldTexts}>
                3M
            </p>
            <p className={styles.smallerTexts}>
                Active users
            </p>
        </div>
        <div>
            <p className={styles.boldTexts}>
                60M
            </p>
            <p className={styles.smallerTexts}>
                Links & QR <br /> codes created
            </p>
        </div>
        <div>
            <p className={styles.boldTexts}>
                1B
            </p>
            <p className={styles.smallerTexts}>
                Clicked & Scanned <br /> connections
            </p>
        </div>
        <div>
            <p className={styles.boldTexts}>
                300K
            </p>
            <p className={styles.smallerTexts}>
            App Integrations
            </p>
        </div>
    </div>
  )
}

export default Hero
