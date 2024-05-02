import React from 'react'
import GroupSix from '../../../assets/images/Group 6.png'
import GroupSixA from '../../../assets/images/Group 6a.png'
import QrCode from '../../../assets/images/Frame 1000001695.png'
import LastImage from '../../../assets/images/Frame 1000001718.png'
import Line from '../../../assets/images/Line 70.png'
import styles from '../fourthSection/index.module.css'

const FourthSection = () => {
  return (
    <div className={styles.fourthSection}>
        <div className={styles.fourthSecFirstDiv}>
            <div className={styles.whyChoose}>
                <img src={Line} alt="Line gradient" className={styles.lineGradient} />
                <p>
                    Why choose <span>Scissors</span>
                </p>
            </div>
            
            <p className={styles.fourthSecTexts}>
                Scissors is the hub of everything that has to do <br /> with your link management. We shorten your URLs, <br /> allow you creating custom ones for your personal, <br /> business, event usage. Our swift QR code <br />creation, management and usage tracking with <br /> advance analytics for all of these is second to <br /> none. 
            </p>
        </div>

        <div className={styles.secondDiv}>
            <div>
                <img src={GroupSix} alt="anchor" />
                <p className={styles.innerTextHeadings}>
                    URL Shortening
                </p>
                <p className={styles.innerTexts}>
                    Scissor allows you to shorten URLs of your <br /> business, events. Shorten your URL at scale, <br /> URL redirects.
                </p>
            </div>
            <div>
                <img src={GroupSixA} alt="" />
                <p className={styles.innerTextHeadings}>
                    Custom URLs
                </p>
                <p>
                    With Scissor, you can create custom URLs, <br /> with the length you want! A solution for socials <br /> and businesses.
                </p>
            </div>
            <div>
                <img src={QrCode} alt="Qr code" />
                <p className={styles.innerTextHeadings}>
                    QR Codes
                </p>
                <p>
                    Generate QR codes to your business, events. <br /> Bring your audience and customers to your <br />
                    doorstep with this scan and go solution.
                </p>
            </div>
            <div>
                <img src={LastImage} alt="" />
                <p className={styles.innerTextHeadings}>
                    Data Analytics
                </p>
                <p>
                    Receive data on the usage of either your <br /> shortened URL, custom URLs or generated QR <br /> codes. Embedded to monitor progress.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FourthSection
