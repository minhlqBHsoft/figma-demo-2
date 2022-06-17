import React from "react";
import styles from './Vision3.module.css';
import Image from '../../img/Home2AboutUs.svg'

const Vision3 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src={Image} alt="About Us image" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.content}>
                            <h2>Our Vision</h2>
                            <h3>Be the best and go international</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                            <br/>
                            <br/>
                            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision3;