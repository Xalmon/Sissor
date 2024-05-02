import React from 'react';
import FilledButton from '../../../buttons/filledButton';
import GhostButton from '../../../buttons/ghostButton';
import Logo from '../../../assets/images/Vector 3.png';
import styles from "../hero/index.module.css"
import Vector from '../../../assets/images/Vector 2.png'
import Frame from '../../../assets/images/Frame 1000001716.png'
import Ellipses from '../../../assets/images/Ellipse 1.png'
import Rectangle from '../../../assets/images/Rectangle 9.png'

const BodyContent = () => {
    return(
        <div className={styles.hero}>
            
            <p className={styles.optimize}>Optimize Your Online Experience with Our <br />
            Advanced <span>URL Shortening</span> Solution</p>
            <img src={Logo} alt="line pic" className={styles.lineImage} />

            <p className={styles.personalize}>
            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, <br /> branded links, and domain customization options to reinforce your brand presence and <br /> enhance user engagement.
            </p>

            <div className={styles.heroBtn}>
                <FilledButton text={'Sign up'} />
                <GhostButton text={'Learn more'} />
            </div>

            <div className={styles.vectorSection}>
                <img src={Vector} alt="vector" className={styles.vectorImage} />

                <div className={styles.vectorSection}>
                    <div className={styles.innerVectorSect}>
                        <img src={Frame} alt="group frame" />
                        <p>
                        Seamlessly transform your long URLs into concise <br />and shareable links with just few clicks.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.heroCenter}>
                <img src={Rectangle} alt="rectangle" className={styles.rectangle} />
                <img src={Ellipses} alt="elipses" className={styles.ellipses} />
            </div>
        </div>
    )
}

export default BodyContent