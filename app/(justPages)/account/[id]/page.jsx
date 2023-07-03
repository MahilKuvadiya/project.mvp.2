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
import './account.css'
import Order from '../../../components/checkout/page'
import { toast } from 'react-hot-toast';
import "swiper/swiper.min.css";

const Page = (ctx) => {
  // const router = useRouter();
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
  // // if (isLoading) {
  // //   return <div>Loading...</div>;
  // // }
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
  const video = account?.video
  const specialFeature = account?.specialFeature

  const [showOrder, setShowOrder] = useState(false); // State variable to control visibility

  const handleBuyClick = () => {
    if(status === 'unauthenticated'){
      toast.error("Plaese login first.")
    }else{
      setShowOrder(true);
    }  };

  return (
    <>
    {/* <button onClick={handleBuyClick}>Buy</button> */}

{showOrder && <Order price={price} accountName={accountName} />}
    
      {/* <div>{accountJSON}</div> */}
      { !showOrder && <>
      <div className="wrapper">

        <div className="content">
          <div className="bg-shape">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp" alt="" />
          </div>


          <div className="product-img">





            <div className="product-img__item" id="img0">
              <img src={image0} alt="image 3" className="product-img__img" height='500px' width='500px' />
            </div>

            <div className="product-img__item" id="img1">
              <img src={image1} alt="image 2" className="product-img__img" height='500px' width='500px' />
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
              <video alt="video" className="product-img__img" height='500px' width='500px' controls={true} autoPlay={"tru"} preload={'auto'} muted>
                <source src={video} type="video/mp4" />

              </video>
            </div>




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
                    <h1 className="product-slider__title" style={{ textAlign: 'center' }}>
                      {title}
                    </h1>
                    <span className="product-slider__price" style={{ textAlign: 'center' }}>&#8377;{price}</span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title">{gameName}</div>



                      </div>

                      <span className="hr-vertical"></span>

                      <div className="product-inf">
                        <div className="product-inf__percent">
                          <div className="product-inf__percent-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                              <defs>

                              </defs>
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

                      
                        <button className="product-slider__cart" onClick={handleBuyClick}>
                          &#x1F6D2; BUY NOW
                        </button>
                    



                        <button className="product-slider__fav js-fav">&#x2713; Assured</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-slider__item swiper-slide" data-target="img1">
                <div className="product-slider__card">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp" alt="star wars" className="product-slider__cover" />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title" style={{ textAlign: 'center' }}>
                      {accountName}
                    </h1>
                    <span className="product-slider__price" style={{ textAlign: 'center' }}>Description</span>
                    <div className="product-ctr">
                      <div className="product-labels">
                        <div className="product-labels__title" style={{ textAlign: 'center' }}>{description}</div>
                      </div>



                    </div>

                    <div className="product-slider__bottom">

                    <button className="product-slider__cart" onClick={handleBuyClick}>
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

                    <div className="product-slider__bottom">
                    <button className="product-slider__cart" onClick={handleBuyClick}>
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

                    <div className="product-slider__bottom">

                    <button className="product-slider__cart" onClick={handleBuyClick}>
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


                    <div className="product-slider__bottom">

                    <button className="product-slider__cart" onClick={handleBuyClick}>
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


                    <div className="product-slider__bottom">

                    <button className="product-slider__cart" onClick={handleBuyClick}>
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
        
      


      </div>
      </>
}
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



