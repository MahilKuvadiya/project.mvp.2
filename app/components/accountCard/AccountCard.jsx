'use client'

// import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './AccountCard.css'
// import Rating from '@mui/material/Rating';
// import { useSession } from 'next-auth/react'
// import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const AccountCard = ({ account: { title, accountName, image, gameName, id, price, specialFeature, email, description

} }) => {

  const imageUrl = image[0]
  const desc = specialFeature

  const lineLength = 25; // Maximum number of characters in each line

  let formattedDescription = '';
  let line = '';
  for (let i = 0; i < desc.length; i++) {
    line += desc[i];
    if (line.length === lineLength) {
      formattedDescription += line + '\n';
      line = '';
    } else if (line.length > lineLength) {
      formattedDescription += line.substring(0, line.length - 1) + '\n';
      line = desc[i];
    }
  }
  if (line.length > 0) {
    formattedDescription += line;
  }


  return (

    <>
      {/* <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'></script>
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>  */}
      {/* <script src="https://cdn.korzh.com/metroui/v4/js/metro.min.js"></script>

      {/* <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"/> */}


      <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"></link>
      <div id='colsm4' className="col-sm-4" style={{ maxWidth: '415px', marginInline: '18px' }}>
        <div id='card1' className="card" style={{display:'flex', flexDirection:'column'}}>

          <div id='bgShape' class="bg-shape1">
            <Link className={classes.imgContainer} href={`/account/${id}`}>
              <img id='mainImg' src={imageUrl} width="420" height="200" alt='main Photo' />
            </Link>
          </div>
          <div id='productSlider' className="product-slider__wrp1 swiper-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
            <div id='cardBody' className="product-slider__item1 swiper-slide swiper-slide-active" style={{ width: '405px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>                  <div className="product-slider__card">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                alt="star wars" className="product-slider__cover1" />
              <div className="product-slider__content1">
                <h1 className="product-slider__title1">
                  {title}
                </h1>
                <span className="product-slider__price1">&#8377;{price}&#x2a;<sup>00</sup></span>
                <span className="hr-vertical1"></span>
                <div className="product-ctr1">
                  <div className="product-labels1">
                    <div className="product-labels__title1">SPECIAL FEATURE</div>

                    <div className="product-labels__group1">
                      <label className="product-labels__item1">
                        <span className="product-labels__txt1">{formattedDescription}</span>
                      </label>


                    </div>
                    

                  </div>
                  
                </div>
                <span className="hr-vertical1"></span>

                <div className="product-slider__bottom1">


                  {/* <button type="button" className="btn btn-danger btn-block" style={{ width: '100%' }}><small>KNOW MORE</small></button> */}

                  <Link className={classes.imgContainer} href={`/account/${id}`}>
                    <button className="product-slider__cart1">
                      BUY NOW
                    </button>
                  </Link>

                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"></link>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default AccountCard