import React from 'react'
import FilledButton from '../../../buttons/filledButton'
import styles from '../finalSection/index.module.css'
import Line from '../../../assets/images/Line 70.png'
import FaqContent from './data'
import { MdAdd } from "react-icons/md";

const FinalSection = () => {
  return (
    <div className={styles.mainDiv}>
        <div>
            <div>
                <img src={Line} alt="" />
                <p>
                    FAQ
                </p>
            </div>

            <div className={styles.faqContentsDiv}>
                {FaqContent.map(item => (
                    <div className={styles.faqContents} key={item.question}>
                        <p className={styles.questions}>{item.question} <MdAdd className={styles.addIcon} /></p>

                        {item.answer.map((item, index) => (
                            <p key={index} className={styles.answers}>
                                {item}
                                <hr />
                            </p>
                        ))}
                    </div>
                ))}
            </div>

        </div>
        

        <div className={styles.optimizationDiv}>
            <p>
                Revolutionizing Link Optimization
            </p>
            <FilledButton text={'Get Started'} padding={'15px 100px'} />
        </div>
    </div>
  )
}

export default FinalSection
