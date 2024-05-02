import React from 'react';
import Line from '../../../assets/images/Line 70.png';
import styles from '../paymentSection/index.module.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FilledButton from '../../../buttons/filledButton'
import OutlineButton from '../../../buttons/outlineButton/outlineButton'

const PaymentSection = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.firstDiv}>
            <div className={styles.firstInnerDiv}>
                <img src={Line} alt="line" />
                <p>
                    A <span>price perfect</span> for your needs.
                </p>
            </div>
            <p className={styles.statement}>
                From catering for your personal, business, event, socials needs, you can be <br /> rest assured we have you in mind in our pricing.
            </p>
        </div>
        <div className={styles.priceCards}>
            <div className={styles.prices}>
                <p className={styles.categories}>
                    Basic
                </p>
                <p className={styles.amount}>
                    Free
                </p>
                <p className={styles.perks}>
                    Free plan for all users
                </p>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Unlimited URL Shortening
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Basic Link Analytics
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Customizable Short Links
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Standard Support
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Ad-supported
                    </p>
                </div>
            </div>
            <div className={styles.prices}>
                <p className={styles.categories}>
                    Professional
                </p>
                <p className={styles.amount}>
                    $15/month
                </p>
                <p className={styles.perks}>
                    Ideal for business creators
                </p>
                <div className={styles.features}> 
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Enhanced Link Analytics
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Custom Branded Domains
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Advanced Link Customization
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Priority Support
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Ad-free Experience
                    </p>
                </div>
            </div>
            <div className={styles.prices}>
                <p className={styles.categories}>
                    Teams
                </p>
                <p className={styles.amount}>
                    $25/month
                </p>
                <p className={styles.perks}>
                    Share with up to 10 users                
                </p>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Team Collaboration
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        User Roles and Permissions
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Enhanced Security
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        API Access
                    </p>
                </div>
                <div className={styles.features}>
                    <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                    <p>
                        Dedicated Account Manager
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.btns}>
            <OutlineButton text={"Get Custom Pricing"} />
            <FilledButton text={"Select Pricing"} padding={"0px 35px"} />
        </div>

        <div>
            <div className={styles.formDiv}>
                <form className={styles.mainForm}>
                    <input 
                        type="text" 
                        placeholder='Place url here' 
                        className={styles.firstInputField}
                    />

                    <div className={styles.selectDiv}>
                        <select name="choose domain" 
                            className={styles.selectBox}>
                            <option>Select Domain</option>
                            <option>Photography</option>
                            <option>Medicine</option>
                            <option>Education</option>
                        </select>
                        <input 
                            type="text" 
                            placeholder='Type alias here' 
                            className={styles.secondInputField}
                        />
                    </div>  

                    <FilledButton 
                        text={'Trim URL'} 
                        padding={'18px 150px'} 
                         />
                    <p className={styles.formText}>
                        By clicking TrimURL, I agree to the <strong>Terms of Service, <br /> 
                        Privacy Policy </strong>
                        and Use of Cookies.
                    </p>          
                </form>
            </div>
        </div>

       
    </div>
  )
}

export default PaymentSection
