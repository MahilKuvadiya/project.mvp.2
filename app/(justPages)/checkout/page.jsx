'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './checkout.module.css'
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useQRCode } from 'next-qrcode';



export const Order =({price,accountName}) => {
    const { data: session } = useSession();
    const { Canvas } = useQRCode();
    
    const ConvenienceFee = price * 0.02
    const _convenienceFee = Number(ConvenienceFee.toFixed(2));
    var Total = parseFloat(price) + parseFloat(_convenienceFee);


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
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>Game Id</p>  <p>{accountName}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>Account Price</p>
                                <p>
                                    {price}
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className={styles.fee}>Convenience Fee @ 2%</p><p>{_convenienceFee}</p>
                            </div>
                        </div>
                        <div className={styles.total}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>Total Amount</p><p>  {Total}</p>
                            </div>

                        </div>
                        {/* <button class="open-button" onclick="openForm()">Open Form</button> */}
                        {/* <button onClick={handleClickOpen}>Open popup</button> */}


                        <form ref={form} onSubmit={sendEmail}>

                            <input type="text" name="to_name" value={session?.user.name} style={{ display: 'none' }} />

                            <input type="email" name="email" value={session?.user?.email} style={{ display: 'none' }} />

                            <input type="number" name="price" value={Total} style={{ display: 'none' }} />

                            <input type="text" name="accountName" value={accountName} style={{ display: 'none' }} />

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
                                
                                
                                <p style={{ color: 'black', marginBottom: '5px' }}>We Will Contact You Shortly to Your Registered Email <span style={{color:'red',borderBottom:'0.5px solid'}}> For ScreenShot of Payment</span></p>
                                
                            
                                {/* <p style={{ color: 'black', marginBottom: '5px' }}>For More Queries Write Us On <a href='mailto:mvptrade42@gmail.com'>mvptrade42@gmail.com</a></p> */}
                            </div>
                            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                            </svg> */}
                            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                            <Canvas
                            id='qr'
                                text={`upi://pay?pa=9825614606@okbizaxis&pn=MVP%20Trade&mc=1234&tid=9876543210&tn=Payment%20for%20MVP%20Order&am=${Total}&cu=INR`}
                                options={{
                                    level: 'M',
                                    margin: 3,
                                    scale: 4,
                                    color: {
                                        dark: '#000000',
                                        light: '#FFFFFF',
                                    },
                                }}
                            />
                            <p style={{ color: 'black' }}>Pay:&#8377;{price}</p>
                            <p style={{ color: 'black', marginBottom: '5px' ,fontSize:'1.5vw'}}>For More Queries Write Us On <a href='mailto:mvptrade42@gmail.com' id='atag' style={{fontSize:'1.5vw'}}>mvptrade42@gmail.com</a></p>
                            </div>

                        </div>

                    </div>

                }




            </div>
        </>
    );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Order />);

// export default Order;