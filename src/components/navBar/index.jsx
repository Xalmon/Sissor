import React from 'react';
import logo from "../../assets/images/Logo.png";
import FilledButton from "../../buttons/filledButton";
import GhostButton from "../../buttons/ghostButton";
import styles from "../../components/navBar/index.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate();

    function gotoLoginForm(){
        navigate('/login')
    }

    return(
        <div className={styles.mainContainer}>
            <div>
                <img src={logo} alt="page logo"/>
            </div>

            <div className={styles.midSection}>
                <p className={styles.urlTextColor}>
                    <Link to="urls/">My URLs</Link>
                </p>
                <div className={styles.featureBtn}>
                    <p>
                        <Link to="features/">Features</Link>
                    </p>
                    <IoIosArrowDown />
                </div>
                <p><Link to='pricing/'>Pricing</Link></p>
                <p><Link to='analytics/'>Analytics</Link></p>
                <p><Link to='faq/'>FAQs</Link></p>
            </div>

            <div className={styles.btn}>
                <GhostButton text="Log in" color="#0065FF" padding="12px 24px" callBack={gotoLoginForm} />
                <FilledButton text="Try for free" color="blue"/>
            </div>
        </div>
    )    
}

export default NavBar;