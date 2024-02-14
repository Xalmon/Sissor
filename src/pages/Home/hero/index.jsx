import React from 'react';
import LineImage from '../../assests/images/Line 70.png';
import styles from '../hero/index.module.css';

const StatItem = ({ boldText, smallerText }) => (
  <div className={styles.statItem}>
    <p className={styles.boldTexts}>{boldText}</p>
    <p className={styles.smallerTexts}>{smallerText}</p>
  </div>
);

const Hero = () => {
  return (
    <div className={styles.heroSectionDiv}>
      <div className={styles.firstDiv}>
        <div className={styles.oneStopWrapper}>
          <p className={styles.oneStop}>
            One Stop.
             Four <span>Possibilities</span>.
          </p>
        </div>

        <div className={styles.statsContainerOne}>
          <StatItem boldText="3M" smallerText="Active users" />
          <StatItem boldText="60M" smallerText="Links & QR codes created" />
          <StatItem boldText="1B" smallerText="Clicked & Scanned connections" />
          <StatItem boldText="300K" smallerText="App Integrations" />
        </div>
      </div>
      <div className={styles.secondDiv}>
        <p className={styles.oneStop}>
          Why choose <br /> <span>Scissors</span>.
        </p>
        <p className={styles.statement}>
          Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. 
        </p>
        <div className={styles.statsContainerTwo}>
          <img src={LineImage} alt="line" className={styles.lineImage} />
          <StatItem boldText="URL Shortening" smallerText="Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects." />
          <img src={LineImage} alt="line" className={styles.lineImage} />
          <StatItem boldText="Custom URLs" smallerText="With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses." />
          <img src={LineImage} alt="line" className={styles.lineImage} />
          <StatItem boldText="QR Codes" smallerText="Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution." />
          <img src={LineImage} alt="line" className={styles.lineImage} />
          <StatItem boldText="Data Analytics" smallerText="Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress." />
        </div>
      </div>
    </div>
  );
};
export default Hero;
