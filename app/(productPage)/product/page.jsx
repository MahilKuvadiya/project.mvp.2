'use client'
import React, { useEffect } from 'react';
import './product.css'
import { Link } from '@mui/material';
import  Swiper from 'swiper';
import 'swiper/css';
import $ from 'jquery';
import Script from "next/script";
import Rating from '@mui/material/Rating';

// import './swipe'
import "swiper/swiper.min.css";
const product = () => {
    useEffect(() => {
      const swiper = new Swiper('.product-slider', {
      spaceBetween: 30,
      effect: 'fade',
      initialSlide: 0,
      loop: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
      },
      on: {
        init: function() {
          const index = this.activeIndex;
          const target = $('.product-slider__item').eq(index).data('target');
          console.log("hii");
          console.log(target);
          $('.product-img__item').removeClass('active');
          $('.product-img__item#' + target).addClass('active');
        }
      }
    });

    swiper.on('slideChange', function() {
      const index = this.activeIndex;
      const target = $('.product-slider__item').eq(index).data('target');
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

    $(".js-fav").on("click", function() {
      $(this).find('.heart').toggleClass("is-active");
    });
      return () => {
        swiper.destroy(); // Cleanup the swiper instance when component unmounts
      };
    }, []);
    return(
        <>
        {/* <Script src='./swipe.js'></Script> */}
        <div class="wrapper">

  <div class="content">
    <div class="bg-shape">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp" alt=""/>
    </div>

    
    <div class="product-img">

      <div class="product-img__item" id="img1">
        <img src="assets/BGMI.webp" alt="star wars" class="product-img__img" height='5000px' width='500px'/>
      </div>

      <div class="product-img__item" id="img2">
        <img src="assets/BGMI.webp" alt="star wars" class="product-img__img"/>
      </div>

      <div class="product-img__item" id="img3">
        <img src="assets/BGMI.webp" alt="star wars" class="product-img__img"/>
      </div>

      <div class="product-img__item" id="img4">
        <img src="assets/BGMI.webp" alt="star wars" class="product-img__img"/>
      </div>


    </div>



    <div class="product-slider">
      <button className="prev disabled">
        <span class="icon">
          <svg class="icon icon-arrow-right"><use href="#icon-arrow-left"></use></svg>
        </span>
      </button>
      <button className="next" id='next'>
        <span class="icon">
          <svg class="icon icon-arrow-right"><use href="#icon-arrow-right"></use></svg>
        </span>
      </button>

      <div class="product-slider__wrp swiper-wrapper">
        <div class="product-slider__item swiper-slide" data-target="img4">
          <div class="product-slider__card">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp" alt="star wars" class="product-slider__cover"/>
            <div class="product-slider__content">
              <h1 class="product-slider__title">
                BGMI - Battleground Mobile
              </h1>
              <span class="product-slider__price" style={{textAlign:'center'}}>&#8377;22,495&#x2a;<sup>99</sup></span>
              <div class="product-ctr">
                <div class="product-labels">
                  <div class="product-labels__title">RATING</div>

                  <div class="product-labels__group">
                    {/* <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type5" />
                      <span class="product-labels__txt">S</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type5" defaultChecked/>
                      <span class="product-labels__txt">M</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type5" />
                      <span class="product-labels__txt">L</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type5"/>
                      <span class="product-labels__txt">XL</span>
                    </label> */}
                    <Rating name="size-medium" defaultValue={2} />

                  </div>

                </div>

                <span class="hr-vertical"></span>

                <div class="product-inf">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                            <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none"/>
                      </svg>
                    </div>
                    <div class="product-inf__percent-txt">
                      80%
                    </div>
                  </div>

                  <span class="product-inf__title">K/D</span>
                </div>

              </div>

              <div class="product-slider__bottom">
                <button class="product-slider__cart">
                  ADD TO CART
                </button>

                <button class="product-slider__fav js-fav"><span class="heart"></span> ADD TO WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
        <div class="product-slider__item swiper-slide" data-target="img1">
          <div class="product-slider__card">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt="star wars" class="product-slider__cover"/>
            <div class="product-slider__content">
              <h1 class="product-slider__title">
                    DESCRIPTION
              </h1>
              <span class="product-slider__price">Mvp Gaming</span>
              <div class="product-ctr">
                <div class="product-labels">
                  <div class="product-labels__title">LEVEL/RANK</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type1" defaultChecked/>
                      <span class="product-labels__txt">108</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type1"/>
                      <span class="product-labels__txt">DIAMOND</span>
                    </label>
                  </div>

                </div>

                <span class="hr-vertical"></span>

                        
                {/* <div class="product-inf">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
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
                    <div class="product-inf__percent-txt">
                      GLACIER
                    </div>
                  </div>
                  <span class="product-inf__title">DURABILITY</span>
                </div> */}
                <div class="product-labels">
                  <div class="product-labels__title">SPECIAL</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type1" defaultChecked/>
                      <span class="product-labels__txt">AKM</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type1"/>
                      <span class="product-labels__txt">GLACIER</span>
                    </label>
                  </div>

                </div>

              </div>

              <div class="product-slider__bottom">
                <button class="product-slider__cart">
                  ADD TO CART
                </button>

                <button class="product-slider__fav js-fav"><span class="heart"></span> ADD TO WISHLIST</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-slider__item swiper-slide" data-target="img2">
          <div class="product-slider__card">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-2-bg.webp" alt="star wars" class="product-slider__cover"/>
            <div class="product-slider__content">
              <h1 class="product-slider__title">
                KYLO REN'S LIGHTSABER
              </h1>
              <span class="product-slider__price">$1.699,<sup>99</sup></span>
              <div class="product-ctr">
                <div class="product-labels">
                  <div class="product-labels__title">VOLTAGE RANGE</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type3" defaultChecked/>
                      <span class="product-labels__txt">2000 <sup>WATT</sup></span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type3"/>
                      <span class="product-labels__txt">2800 <sup>WATT</sup></span>
                    </label>
                  </div>

                  <div class="product-labels__title">LASER SIZE</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type2"/>
                      <span class="product-labels__txt">S</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type2" defaultChecked/>
                      <span class="product-labels__txt">M</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type2" />
                      <span class="product-labels__txt">L</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type2" />
                      <span class="product-labels__txt">XL</span>
                    </label>

                  </div>

                </div>

                <span class="hr-vertical"></span>

                <div class="product-inf">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                            <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none"/>
                      </svg>
                    </div>
                    <div class="product-inf__percent-txt">
                      80%
                    </div>
                  </div>

                  <span class="product-inf__title">DURABILITY</span>
                </div>

              </div>

              <div class="product-slider__bottom">
                <button class="product-slider__cart">
                  ADD TO CART
                </button>

                <button class="product-slider__fav js-fav"><span class="heart"></span> ADD TO WISHLIST</button>
              </div>
            </div>
          </div>
        </div>

        <div class="product-slider__item swiper-slide" data-target="img3">
          <div class="product-slider__card">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" class="product-slider__cover"/>
            <div class="product-slider__content">
              <h1 class="product-slider__title">
                IMPERIAL ARMY'S
                DEATH STAR 
              </h1>
              <span class="product-slider__price">$9.999,<sup>99</sup></span>
              <div class="product-ctr">
                <div class="product-labels">
                  <div class="product-labels__title">HYPERDRIVE RATING</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type6" defaultChecked/>
                      <span class="product-labels__txt">CLASS 4</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type6"/>
                      <span class="product-labels__txt">CLASS 20</span>
                    </label>
                  </div>

                  <div class="product-labels__title">ARMANENT</div>

                  <div class="product-labels__group">
                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type7" defaultChecked/>
                      <span class="product-labels__txt">SUPERLASER</span>
                    </label>

                    <label class="product-labels__item">
                      <input type="radio" class="product-labels__checkbox" name="type7"/>
                      <span class="product-labels__txt">TURBOLASER</span>
                    </label>
                  </div>

                </div>

                <span class="hr-vertical"></span>

                <div class="product-inf">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                            <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none"/>
                      </svg>
                    </div>
                    <div class="product-inf__percent-txt">
                      80%
                    </div>
                  </div>

                  <span class="product-inf__title">DURABILITY RATE</span>
                </div>

              </div>

              <div class="product-slider__bottom">
                <button class="product-slider__cart">
                  ADD TO CART
                </button>

                <button class="product-slider__fav js-fav"><span class="heart"></span> ADD TO WISHLIST</button>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>

  </div>

  {/* <div class="social">
<a href="https://twitter.com/imuhammederdem" target="_blank" class="social__item">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/twitter.webp" alt="muhammed erdem" class="social__img"/>
      <span class="social__txt">Coded By Muhammed Erdem</span>
    </a>

    <a href="https://dribbble.com/shots/3453028-Star-Wars-TIE-Fighter-UI" target="_blank" class="social__item">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/dribbble.webp" alt="eray yeşilyurt" class="social__img"/>
      <span class="social__txt">Designed By Eray Yeşilyurt</span>
    </a>

  </div> */}

</div>
<svg class="hidden" hidden>
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
    );
}
export default product