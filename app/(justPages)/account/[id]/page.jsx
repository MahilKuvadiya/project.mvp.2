'use client'
import React from 'react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import $ from "jquery";
import Script from "next/script";
import Rating from '@mui/material/Rating';
import './account.css'
// import Video from '../../../../public/assets/video.mp4'

import "swiper/swiper.min.css";


const Page = (ctx) => {
  const { data: session, status } = useSession();
  const [account, setAccount] = useState();
  // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

      var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        parallax: true,
        navigation: true,
        effect: 'fade',
        // initialSlide: 2,
        loop: false,
        modules: [Navigation],
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
          init: function () {
            var index = this.activeIndex;
  
            var target = $('.product-slider__item').eq(index).data('target');
  
            console.log(target);
  
            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
          }
        }
  
      });
  
      swiper.on('slideChange', function () {
        var index = this.activeIndex;
  
        var target = $('.product-slider__item').eq(index).data('target');
  
        console.log(target);
  
        $('.product-img__item').removeClass('active');
        $('.product-img__item#' + target).addClass('active');
  
        if (swiper.isEnd) {
          $('.prev').removeClass('disabled');
          $('.next').addClass('disabled');
        } else {
          $('.next').removeClass('disabled');
        }
  
        if (swiper.isBeginning) {
          $('.prev').addClass('disabled');
        } else {
          $('.prev').removeClass('disabled');
        }
      });
  
      $(".js-fav").on("click", function () {
        $(this).find('.heart').toggleClass("is-active");
      });

        async function fetchAccountInfo() {
          try {
            const data = {
              id: ctx.params.id,
            };
    
            const response = await axios.post('/api/getParticularAccount', data);
            setAccount(response.data);
            console.log(account)
          } catch (error) {
            console.error(error);
          } 
        }
    

        fetchAccountInfo();
    }, [session]);
    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
 JSON.stringify(account)
 const title = account?.title
 
const accountName = account?.accountName 
const gameName = account?.gameName
const price = account?.price
const email = account?.email

const description = account?.description
const image0 = account?.image[0]
const image1 = account?.image[1]
const image2 = account?.image[2]
const image3 = account?.image[3]
const image4 = account?.image[4]
const video  = account?.video
const specialFeature = account?.specialFeature
    return (
      <>
     {/* <div>{accountJSON}</div> */}
    <div className="wrapper">

        <div className="content">
          <div className="bg-shape">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp" alt="" />
          </div>


          <div className="product-img">


          {/* <Link className={classes.imgContainer} href={`/blog/${id}`}>
              <img id='mainImg' src={imageUrl} width="420" height="200" alt='main Photo' />
            </Link> */}


            <div className="product-img__item" id="img0">
              <img src={image0} alt="image 3" className="product-img__img" height='500px' width='500px' />
            </div>

            <div className="product-img__item" id="img1">
              <img  src={image1} alt="image 2" className="product-img__img" height='500px' width='500px' />
            </div>

            <div className="product-img__item" id="img2">
              <img src={image2} alt="image 1" className="product-img__img" height='350px' width='5000px' />
            </div>

            <div className="product-img__item" id="img3">
              <img src={image3} alt="image 0" className="product-img__img" height='500px' width='500px' />
            </div>

            <div className="product-img__item" id="img4">
              <img src={image4} alt="image 0" className="product-img__img" height='500px' width='500px' />
            </div>

            <div className="product-img__item" id="video">
              <video  alt="video" className="product-img__img" height='500px' width='500px'  controls={true} autoPlay={"tru"}  preload={'auto'} muted>
              <source src={video} type="video/mp4"/>
              
              </video>
            </div>

            {/* <video width="320" height="240" controls loop autoplay>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> */}


          </div>



          <div className="product-slider">
            <div className="swiper-pagination"></div>
            <button className="prev disabled">
              <span className="icon">
                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left"></use></svg>
              </span>
            </button>
            <button className="next swiper-button-next">
              <span className="icon">
                <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
              </span>
            </button>

            <div className="product-slider__wrp swiper-wrapper">
              <div className="product-slider__item swiper-slide" data-target="img0">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title" style={{textAlign:'center'}}>
                      {title}
                    </h1>
                    <span className="product-slider__price" style={{ textAlign: 'center' }}>&#8377;{price}</span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">{gameName}</div>

                        {/* <div className="product-labels__group">
                          
                          <Rating name="size-medium" defaultValue={2} />

                        </div> */}

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>
                                {/* <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                </linearGradient> */}
                              </defs>
                              {/* <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" /> */}
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                          {specialFeature}
                          </div>
                        </div>

                        {/* <span className="product-inf__title">5 Rare Skins</span> */}
                      </div>

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW  
                      </button>

                      <button className="product-slider__fav js-fav">&#128230;Easy Return</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-slider__item swiper-slide" data-target="img1">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title" style={{textAlign:'center'}}>
                      {accountName}
                    </h1>
                    <span className="product-slider__price" style={{textAlign:'center'}}>Description</span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title" style={{textAlign:'center'}}>{description}</div>
                      </div>

                      {/* <span className="hr-vertical"></span> */}


                      {/* <div className="product-inf">
                  <div className="product-inf__percent">
                    <div className="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                            <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" strokeDasharray="225, 300" stroke="#cb2240" strokeWidth="4" fill="none"/>
                      </svg>
                    </div>
                    <div className="product-inf__percent-txt">
                      GLACIER
                    </div>
                  </div>
                  <span className="product-inf__title">DURABILITY</span>
                </div> */}
                      {/* <div className="product-labels">
                        <div className="product-labels__title">SPECIAL</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type1" defaultChecked />
                            <span className="product-labels__txt">AKM</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type1" />
                            <span className="product-labels__txt">GLACIER</span>
                          </label>
                        </div>

                      </div> */}

                    </div>

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW
                      </button>

                      <button className="product-slider__fav js-fav">&#x2713; Assured</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-slider__item swiper-slide" data-target="img2">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-2-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    {/* <h1 className="product-slider__title">
                      KYLO REN'S LIGHTSABER
                    </h1> */}
                    {/* <span className="product-slider__price">$1.699,<sup>99</sup></span> */}
                    {/* <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">VOLTAGE RANGE</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type3" defaultChecked />
                            <span className="product-labels__txt">2000 <sup>WATT</sup></span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type3" />
                            <span className="product-labels__txt">2800 <sup>WATT</sup></span>
                          </label>
                        </div>

                        <div className="product-labels__title">LASER SIZE</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">S</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" defaultChecked />
                            <span className="product-labels__txt">M</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">L</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type2" />
                            <span className="product-labels__txt">XL</span>
                          </label>

                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY</span>
                      </div>

                    </div> */}

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW
                      </button>

                      {/* <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-slider__item swiper-slide" data-target="video">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    {/* <h1 className="product-slider__title">
                      IMPERIAL ARMY'S
                      DEATH STAR
                    </h1> */}
                    {/* <span className="product-slider__price">$9.999,<sup>99</sup></span> */}
                    {/* <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">HYPERDRIVE RATING</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" defaultChecked />
                            <span className="product-labels__txt">className 4</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" />
                            <span className="product-labels__txt">className 20</span>
                          </label>
                        </div>

                        <div className="product-labels__title">ARMANENT</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" defaultChecked />
                            <span className="product-labels__txt">SUPERLASER</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" />
                            <span className="product-labels__txt">TURBOLASER</span>
                          </label>
                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY RATE</span>
                      </div>

                    </div> */}

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW
                      </button>

                      {/* <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-slider__item swiper-slide" data-target="img3">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    {/* <h1 className="product-slider__title">
                      IMPERIAL ARMY'S
                      DEATH STAR
                    </h1> */}
                    {/* <span className="product-slider__price">$9.999,<sup>99</sup></span> */}
                    {/* <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">HYPERDRIVE RATING</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" defaultChecked />
                            <span className="product-labels__txt">className 4</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" />
                            <span className="product-labels__txt">className 20</span>
                          </label>
                        </div>

                        <div className="product-labels__title">ARMANENT</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" defaultChecked />
                            <span className="product-labels__txt">SUPERLASER</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" />
                            <span className="product-labels__txt">TURBOLASER</span>
                          </label>
                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY RATE</span>
                      </div>

                    </div> */}

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW
                      </button>

                      {/* <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-slider__item swiper-slide" data-target="img4">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    {/* <h1 className="product-slider__title">
                      IMPERIAL ARMY'S
                      DEATH STAR
                    </h1> */}
                    {/* <span className="product-slider__price">$9.999,<sup>99</sup></span> */}
                    {/* <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">HYPERDRIVE RATING</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" defaultChecked />
                            <span className="product-labels__txt">className 4</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type6" />
                            <span className="product-labels__txt">className 20</span>
                          </label>
                        </div>

                        <div className="product-labels__title">ARMANENT</div>

                        <div className="product-labels__group">
                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" defaultChecked />
                            <span className="product-labels__txt">SUPERLASER</span>
                          </label>

                          <label className="product-labels__item">
                            <input type="radio" className="product-labels__checkbox" name="type7" />
                            <span className="product-labels__txt">TURBOLASER</span>
                          </label>
                        </div>

                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                  <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                </linearGradient>
                              </defs>
                              <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
                            </svg>
                          </div>
                          <div className="product-inf__percent-txt">
                            80%
                          </div>
                        </div>

                        <span className="product-inf__title">DURABILITY RATE</span>
                      </div>

                    </div> */}

                    <div className="product-slider__bottom">
                      <button className="product-slider__cart">
                      &#x1F6D2; BUY NOW
                      </button>

                      {/* <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button> */}
                    </div>
                  </div>
                </div>
              </div>
      



            </div>
          </div>

        </div>

        {/* <div className="social">
<a href="https://twitter.com/imuhammederdem" target="_blank" className="social__item">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/twitter.webp" alt="muhammed erdem" className="social__img"/>
      <span className="social__txt">Coded By Muhammed Erdem</span>
    </a>

    <a href="https://dribbble.com/shots/3453028-Star-Wars-TIE-Fighter-UI" target="_blank" className="social__item">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/dribbble.webp" alt="eray yeşilyurt" className="social__img"/>
      <span className="social__txt">Designed By Eray Yeşilyurt</span>
    </a>

  </div> */}

      </div>
      <svg className="hidden" hidden>
        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
          <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
        </symbol>
        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
          <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
        </symbol>
      </svg>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></Script>

      <Script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js'></Script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"></link>
      {/* <Script  src="./swipe.js"></Script> */}
    </>
  )
}


export default Page



// 'use client'
// import React, { useEffect } from 'react';
// import './product.css'
// import { Link } from '@mui/material';
// import Swiper, { Navigation } from 'swiper';
// import 'swiper/css';
// import $ from "jquery";
// import Script from "next/script";
// import Rating from '@mui/material/Rating';

// import "swiper/swiper.min.css";
// const product = () => {

//   useEffect(() => {
//     var swiper = new Swiper('.product-slider', {
//       spaceBetween: 30,
//       observer: true,
//       observeParents: true,
//       parallax: true,
//       navigation: true,
//       effect: 'fade',
//       // initialSlide: 2,
//       loop: false,
//       modules: [Navigation],
//       navigation: {
//         nextEl: '.next',
//         prevEl: '.prev'
//       },
//       // mousewheel: {
//       //     // invert: false
//       // },
//       on: {
//         init: function () {
//           var index = this.activeIndex;

//           var target = $('.product-slider__item').eq(index).data('target');

//           console.log(target);

//           $('.product-img__item').removeClass('active');
//           $('.product-img__item#' + target).addClass('active');
//         }
//       }

//     });

//     swiper.on('slideChange', function () {
//       var index = this.activeIndex;

//       var target = $('.product-slider__item').eq(index).data('target');

//       console.log(target);

//       $('.product-img__item').removeClass('active');
//       $('.product-img__item#' + target).addClass('active');

//       if (swiper.isEnd) {
//         $('.prev').removeClass('disabled');
//         $('.next').addClass('disabled');
//       } else {
//         $('.next').removeClass('disabled');
//       }

//       if (swiper.isBeginning) {
//         $('.prev').addClass('disabled');
//       } else {
//         $('.prev').removeClass('disabled');
//       }
//     });

//     $(".js-fav").on("click", function () {
//       $(this).find('.heart').toggleClass("is-active");
//     });
//     // return () => {
//     //   swiper.destroy(); // Cleanup the swiper instance when component unmounts
//     // };
//   }, []);
//   return (
//     <>
//       {/* <Script src='./swipe.js'></Script> */}
//       <div className="wrapper">

//         <div className="content">
//           <div className="bg-shape">
//             <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp" alt="" />
//           </div>


//           <div className="product-img">

//             <div className="product-img__item" id="img1">
//               <img src="assets/BGMI.webp" alt="star wars" className="product-img__img" height='5000px' width='500px' />
//             </div>

//             <div className="product-img__item" id="img2">
//               <img src="assets/BGMI.webp" alt="star wars" className="product-img__img" />
//             </div>

//             <div className="product-img__item" id="img3">
//               <img src="assets/BGMI.webp" alt="star wars" className="product-img__img" />
//             </div>

//             <div className="product-img__item" id="img4">
//               <img src="assets/BGMI.webp" alt="star wars" className="product-img__img" />
//             </div>


//           </div>



//           <div className="product-slider">
//             <div className="swiper-pagination"></div>
//             <button className="prev disabled">
//               <span className="icon">
//                 <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left"></use></svg>
//               </span>
//             </button>
//             <button className="next swiper-button-next">
//               <span className="icon">
//                 <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
//               </span>
//             </button>

//             <div className="product-slider__wrp swiper-wrapper">
//               <div className="product-slider__item swiper-slide" data-target="img4">
//                 <div className="product-slider__card">
//                   <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp" alt="star wars" className="product-slider__cover" />
//                   <div className="product-slider__content">
//                     <h1 className="product-slider__title">
//                       BGMI - Battleground Mobile
//                     </h1>
//                     <span className="product-slider__price" style={{ textAlign: 'center' }}>&#8377;22,495&#x2a;<sup>99</sup></span>
//                     <div className="product-ctr">
//                       <div className="product-labels">
//                         <div className="product-labels__title">RATING</div>

//                         <div className="product-labels__group">
//                           {/* <label className="product-labels__item">
//                       <input type="radio" className="product-labels__checkbox" name="type5" />
//                       <span className="product-labels__txt">S</span>
//                     </label>

//                     <label className="product-labels__item">
//                       <input type="radio" className="product-labels__checkbox" name="type5" defaultChecked/>
//                       <span className="product-labels__txt">M</span>
//                     </label>

//                     <label className="product-labels__item">
//                       <input type="radio" className="product-labels__checkbox" name="type5" />
//                       <span className="product-labels__txt">L</span>
//                     </label>

//                     <label className="product-labels__item">
//                       <input type="radio" className="product-labels__checkbox" name="type5"/>
//                       <span className="product-labels__txt">XL</span>
//                     </label> */}
//                           <Rating name="size-medium" defaultValue={2} />

//                         </div>

//                       </div>

//                       <span className="hr-vertical"></span>

//                       <div className="product-inf">
//                         <div className="product-inf__percent">
//                           <div className="product-inf__percent-circle">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
//                               <defs>
//                                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                                   <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
//                                   <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
//                                 </linearGradient>
//                               </defs>
//                               <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
//                             </svg>
//                           </div>
//                           <div className="product-inf__percent-txt">
//                             80%
//                           </div>
//                         </div>

//                         <span className="product-inf__title">K/D</span>
//                       </div>

//                     </div>

//                     <div className="product-slider__bottom">
//                       <button className="product-slider__cart">
//                         ADD TO CART
//                       </button>

//                       <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="product-slider__item swiper-slide" data-target="img1">
//                 <div className="product-slider__card">
//                   <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt="star wars" className="product-slider__cover" />
//                   <div className="product-slider__content">
//                     <h1 className="product-slider__title">
//                       DESCRIPTION
//                     </h1>
//                     <span className="product-slider__price">Mvp Gaming</span>
//                     <div className="product-ctr">
//                       <div className="product-labels">
//                         <div className="product-labels__title">LEVEL/RANK</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type1" defaultChecked />
//                             <span className="product-labels__txt">108</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type1" />
//                             <span className="product-labels__txt">DIAMOND</span>
//                           </label>
//                         </div>

//                       </div>

//                       <span className="hr-vertical"></span>


//                       {/* <div className="product-inf">
//                   <div className="product-inf__percent">
//                     <div className="product-inf__percent-circle">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
//                         <defs>
//                           <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                             <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
//                             <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
//                           </linearGradient>
//                         </defs>
//                         <circle cx="50" cy="50" r="47" strokeDasharray="225, 300" stroke="#cb2240" strokeWidth="4" fill="none"/>
//                       </svg>
//                     </div>
//                     <div className="product-inf__percent-txt">
//                       GLACIER
//                     </div>
//                   </div>
//                   <span className="product-inf__title">DURABILITY</span>
//                 </div> */}
//                       <div className="product-labels">
//                         <div className="product-labels__title">SPECIAL</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type1" defaultChecked />
//                             <span className="product-labels__txt">AKM</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type1" />
//                             <span className="product-labels__txt">GLACIER</span>
//                           </label>
//                         </div>

//                       </div>

//                     </div>

//                     <div className="product-slider__bottom">
//                       <button className="product-slider__cart">
//                         ADD TO CART
//                       </button>

//                       <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="product-slider__item swiper-slide" data-target="img2">
//                 <div className="product-slider__card">
//                   <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-2-bg.webp" alt="star wars" className="product-slider__cover" />
//                   <div className="product-slider__content">
//                     <h1 className="product-slider__title">
//                       KYLO REN'S LIGHTSABER
//                     </h1>
//                     <span className="product-slider__price">$1.699,<sup>99</sup></span>
//                     <div className="product-ctr">
//                       <div className="product-labels">
//                         <div className="product-labels__title">VOLTAGE RANGE</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type3" defaultChecked />
//                             <span className="product-labels__txt">2000 <sup>WATT</sup></span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type3" />
//                             <span className="product-labels__txt">2800 <sup>WATT</sup></span>
//                           </label>
//                         </div>

//                         <div className="product-labels__title">LASER SIZE</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type2" />
//                             <span className="product-labels__txt">S</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type2" defaultChecked />
//                             <span className="product-labels__txt">M</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type2" />
//                             <span className="product-labels__txt">L</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type2" />
//                             <span className="product-labels__txt">XL</span>
//                           </label>

//                         </div>

//                       </div>

//                       <span className="hr-vertical"></span>

//                       <div className="product-inf">
//                         <div className="product-inf__percent">
//                           <div className="product-inf__percent-circle">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
//                               <defs>
//                                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                                   <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
//                                   <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
//                                 </linearGradient>
//                               </defs>
//                               <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
//                             </svg>
//                           </div>
//                           <div className="product-inf__percent-txt">
//                             80%
//                           </div>
//                         </div>

//                         <span className="product-inf__title">DURABILITY</span>
//                       </div>

//                     </div>

//                     <div className="product-slider__bottom">
//                       <button className="product-slider__cart">
//                         ADD TO CART
//                       </button>

//                       <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="product-slider__item swiper-slide" data-target="img3">
//                 <div className="product-slider__card">
//                   <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" className="product-slider__cover" />
//                   <div className="product-slider__content">
//                     <h1 className="product-slider__title">
//                       IMPERIAL ARMY'S
//                       DEATH STAR
//                     </h1>
//                     <span className="product-slider__price">$9.999,<sup>99</sup></span>
//                     <div className="product-ctr">
//                       <div className="product-labels">
//                         <div className="product-labels__title">HYPERDRIVE RATING</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type6" defaultChecked />
//                             <span className="product-labels__txt">className 4</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type6" />
//                             <span className="product-labels__txt">className 20</span>
//                           </label>
//                         </div>

//                         <div className="product-labels__title">ARMANENT</div>

//                         <div className="product-labels__group">
//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type7" defaultChecked />
//                             <span className="product-labels__txt">SUPERLASER</span>
//                           </label>

//                           <label className="product-labels__item">
//                             <input type="radio" className="product-labels__checkbox" name="type7" />
//                             <span className="product-labels__txt">TURBOLASER</span>
//                           </label>
//                         </div>

//                       </div>

//                       <span className="hr-vertical"></span>

//                       <div className="product-inf">
//                         <div className="product-inf__percent">
//                           <div className="product-inf__percent-circle">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
//                               <defs>
//                                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                                   <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
//                                   <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
//                                 </linearGradient>
//                               </defs>
//                               <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none" />
//                             </svg>
//                           </div>
//                           <div className="product-inf__percent-txt">
//                             80%
//                           </div>
//                         </div>

//                         <span className="product-inf__title">DURABILITY RATE</span>
//                       </div>

//                     </div>

//                     <div className="product-slider__bottom">
//                       <button className="product-slider__cart">
//                         ADD TO CART
//                       </button>

//                       <button className="product-slider__fav js-fav"><span className="heart"></span> ADD TO WISHLIST</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>



//             </div>
//           </div>

//         </div>

//         {/* <div className="social">
// <a href="https://twitter.com/imuhammederdem" target="_blank" className="social__item">
//       <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/twitter.webp" alt="muhammed erdem" className="social__img"/>
//       <span className="social__txt">Coded By Muhammed Erdem</span>
//     </a>

//     <a href="https://dribbble.com/shots/3453028-Star-Wars-TIE-Fighter-UI" target="_blank" className="social__item">
//       <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/dribbble.webp" alt="eray yeşilyurt" className="social__img"/>
//       <span className="social__txt">Designed By Eray Yeşilyurt</span>
//     </a>

//   </div> */}

//       </div>
//       <svg className="hidden" hidden>
//         <symbol id="icon-arrow-left" viewBox="0 0 32 32">
//           <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
//         </symbol>
//         <symbol id="icon-arrow-right" viewBox="0 0 32 32">
//           <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
//         </symbol>
//       </svg>
//       <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></Script>

//       <Script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js'></Script>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"></link>
//       {/* <Script  src="./swipe.js"></Script> */}
//     </>
//   );
// }
// export default product