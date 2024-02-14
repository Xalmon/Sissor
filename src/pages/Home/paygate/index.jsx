import React from 'react';
import Line from '../../assests/images/Line 70.png';
import styles from '../paygate/index.module.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FilledButton from '../../../reuseables/Buttons/GhostButton';
import OutlineButton from '../../../reuseables/Buttons/FilledButton';

const Paygate = () => {
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
        {[
          { category: "Basic", amount: "Free", perks: "Free plan for all users" },
          { category: "Professional", amount: "$15/month", perks: "Ideal for business creators" },
          { category: "Teams", amount: "$25/month", perks: "Share with up to 10 users" }
        ].map((price, index) => (
          <div key={index} className={styles.prices}>
            <p className={styles.categories}>{price.category}</p>
            <p className={styles.amount}>{price.amount}</p>
            <p className={styles.perks}>{price.perks}</p>
            {[
              "Unlimited URL Shortening",
              "Enhanced Link Analytics",
              "Team Collaboration"
            ].map((feature, i) => (
              <div key={i} className={styles.features}>
                <IoMdCheckmarkCircleOutline className={styles.checkMark} />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.btns}>
        <OutlineButton text={"Get Custom Pricing"} />
        <FilledButton text={"Select Pricing"} padding={"0px 35px"} />
      </div>

      <div className={styles.formDiv}>
        <form className={styles.mainForm}>
          <input type="text" placeholder='Place url here' className={styles.firstInputField} />
          <div className={styles.selectDiv}>
            <select name="choose domain" className={styles.selectBox}>
              <option>Select Domain</option>
              <option>Photography</option>
              <option>Medicine</option>
              <option>Education</option>
            </select>
            <input type="text" placeholder='Type alias here' className={styles.secondInputField} />
          </div>
          <OutlineButton text={'Trim URL'} padding={'18px 150px'} />
          <p className={styles.formText}>
            By clicking TrimURL, I agree to the <strong>Terms of Service, Privacy Policy</strong>, and Use of Cookies.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Paygate;
