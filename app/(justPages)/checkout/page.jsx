'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './checkout.module.css'
import '../../(AuthPages)/dashboard/dashboard.css'
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import User from '../../components/User';
// import { useSession } from 'react';

const Order = () => {
    const { data: session } = useSession();

    const [popup, setPop] = useState(false)

    const handleClickOpen = () => {
        console.log("try")
        setPop(!popup)
        toast.success("Order Placed Successfully")
    }
    const closePopup = () => {
        setPop(false)
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nt7qx5p', 'template_kk9ecn6', form.current, 'DSLTau84FUshDVOQ5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            sendEmail1(e);
    };
    const sendEmail1 = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nt7qx5p', 'template_a2xssk4', form.current, 'DSLTau84FUshDVOQ5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div id='conta' className="container">
                <div className={styles.wrapper}>
                    <p>Place Your Order</p>
                    <div className={styles.box}>
                        <div className={styles.game}>
                            <p>Game Id</p>
                            <p>Account Price
                                0000₹
                            </p>
                            <p className={styles.fee}>Convenience Fee @ 2%</p>
                        </div>
                        <div className={styles.total}>
                            <p>Total Amount  0000₹</p>

                        </div>
                        {/* <button class="open-button" onclick="openForm()">Open Form</button> */}
                        {/* <button onClick={handleClickOpen}>Open popup</button> */}

                        
                        <form ref={form} onSubmit={sendEmail}>
                            
                            <input type="text" name="to_name" value={session?.user.name} style={{display:'none'}}/>
                            
                            <input type="email" name="email"value={session?.user?.email} style={{display:'none'}} />

                            
                            {/* <button type="submit" value="Send" /> */}
                            <button type='submit' value='Send' className={styles.place} onClick={handleClickOpen}>Place</button>
                        </form>

                    </div>
                </div>
            </div>
            <div>

                {popup &&

                    <div className={popup ? styles.main : styles.hidden}>
                        <div className={popup ? styles.popup : styles.hidden}>
                            <div className={popup ? styles.popupheader : styles.hidden}>

                                <a href="/" style={{ color: 'red', textDecoration: 'none' }}>X</a>
                            </div>
                            <div style={{ textAlign: 'center' }}>

                                <p style={{ color: 'green' }}>Order Placed Successfully</p>

                                <p style={{ color: 'black', marginBottom: '5px' }}>We Will Contact You Shortly to Your Registered Email</p>
                                <p style={{ color: 'black', marginBottom: '5px' }}>For More Queries Write Us On <a href='mailto:mvptrade42@gmail.com'>mvptrade42@gmail.com</a></p>
                            </div>
                            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                            </svg> */}

                        </div>
                    </div>
                }

            </div>
        </>
    );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Order />);

export default Order;