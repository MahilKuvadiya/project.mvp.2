'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './AccountCard.module.css'
import Rating from '@mui/material/Rating';
// import { useSession } from 'next-auth/react'
// import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const AccountCard = ({ account: { title, accountName, image, gameName, id,price,specialFeature,email,description

} }) => {

  const imageUrl = image[0]

  return (
    <>
         <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'></script>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        {/* <script src="https://cdn.korzh.com/metroui/v4/js/metro.min.js"></script> */}
        
        {/* <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"/> */}
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"></link>
      {/* <div className={classes.container}>
        <div className={classes.wrapper}>
          <Link className={classes.imgContainer} href={`/blog/${id}`}>
            <Image src={imageUrl} width="350" height="350" />
          </Link>
          <div className={classes.blogData}>
            <div className={classes.left}>
              <h3>{title}</h3>
              <p>{gameName}</p>
              <span>Created By: <span>1th of January</span></span>
            </div>
          </div>
        </div>
      </div> */}
{/* <div className="container-fluid d-flex justify-content-center"> */}
  {/* <div className="row mt-5" style={{justifyContent:'center'}}> */}
      <div className="col-sm-4" style={{ minWidth: '400px' }}>
        <div className="card">
            <Image src={imageUrl}className="card-img-top" width="350" height="250" alt='main Photo' />
         
          {/* <img src="assets/BGMI.webp" className="card-img-top" width="100%" /> */}
          <div className="card-body pt-0 px-0">
            <div className="d-flex flex-row justify-content-between mb-0 px-3">
              <small className="text-muted mt-1">STARTING AT</small>
              <h6>&#8377;{price}&#x2a;</h6>
            </div>
            <hr className="mt-2 mx-3" />
            <div className="d-flex flex-row justify-content-between px-3 pb-4">
              <div className="d-flex flex-column"><span className="text-muted">Rating</span><small className="text-muted">USER&#x2a;</small></div>
              <div className="d-flex flex-column"><h5 className="mb-0"><Rating name="size-medium" defaultValue={2} /></h5><small className="text-muted text-right" >(3856)</small></div>
            </div>
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column"><small className="text-muted mb-1">Level/Rank</small><div className="d-flex flex-row"><img src="assets/level1.png" width="35px" height="25px" /><div className="d-flex flex-column ml-1"><small className="ghj">104 Level</small><small className="ghj">1.5 K/D</small></div></div></div>
              <div className="d-flex flex-column"><small className="text-muted mb-2">Special</small><div className="d-flex flex-row"><img src="assets/gift.png" width="25px" height="25px" /><h6 className="ml-1">{specialFeature}&#x2a;</h6></div></div>
            </div>
            <small className="text-muted key pl-3">Standard key Features</small>
            
            <div className="mx-3 mt-3 mb-2">

            <Link className={classes.imgContainer} href={`/account/${id}`}>

            <button type="button" className="btn btn-danger btn-block" style={{ width: '100%' }}><small>KNOW MORE</small></button>
            </Link>
            </div>
            <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default AccountCard