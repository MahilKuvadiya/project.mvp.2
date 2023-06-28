'use client'
// import './Buy.css'
import Rating from '@mui/material/Rating';
import React, { useEffect } from 'react';
import 'swiper/css';



const page = () => {

  return (
    <div>
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'></script>
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

      <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"></link>


      <div className="container-fluid d-flex justify-content-center">
        <div className="row mt-5" style={{ justifyContent: 'center' }}>
          <div className="col-sm-4" style={{ maxWidth: '480px', height: '650px' }}>
            <div className="card">

              <div class="bg-shape">
                <img src="assets/BGMI.webp" alt="" />
              </div>
              <div class="product-slider__wrp swiper-wrapper" >
                <div class="product-slider__item swiper-slide swiper-slide-active" style={{ width: '405px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>                  <div class="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                    alt="star wars" class="product-slider__cover" />
                  <div class="product-slider__content">
                    <h1 class="product-slider__title">
                      BGMI - Battleground Mobile
                    </h1>
                    <span class="product-slider__price">&#8377;22,495&#x2a;<sup>99</sup></span>
                    <span class="hr-vertical"></span>
                    <div class="product-ctr">
                      <div class="product-labels">
                        <div class="product-labels__title">DETAILS</div>

                        <div class="product-labels__group">
                          <label class="product-labels__item">
                            <span class="product-labels__txt">This is Description of User</span>
                          </label>


                        </div>

                      </div>





                    </div>
                    <span class="hr-vertical"></span>

                    <div class="product-slider__bottom">
                      <button class="product-slider__cart">
                        ADD TO CART
                      </button>


                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-sm-4" style={{ maxWidth: '480px', height: '650px' }}>
            <div className="card">

              <div class="bg-shape">
                <img src="assets/BGMI.webp" alt="" />
              </div>
              <div class="product-slider__wrp swiper-wrapper">
                <div class="product-slider__item swiper-slide swiper-slide-active" style={{ width: '405px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>                  <div class="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                    alt="star wars" class="product-slider__cover" />
                  <div class="product-slider__content">
                    <h1 class="product-slider__title">
                      BGMI - Battleground Mobile
                    </h1>
                    <span class="product-slider__price">&#8377;22,495&#x2a;<sup>99</sup></span>
                    <span class="hr-vertical"></span>
                    <div class="product-ctr">
                      <div class="product-labels">
                        <div class="product-labels__title">DETAILS</div>

                        <div class="product-labels__group">
                          <label class="product-labels__item">
                            <span class="product-labels__txt">This is Description of User</span>
                          </label>


                        </div>

                      </div>





                    </div>
                    <span class="hr-vertical"></span>

                    <div class="product-slider__bottom">
                      <button class="product-slider__cart">
                        ADD TO CART
                      </button>


                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ maxWidth: '480px', height: '650px' }}>
            <div className="card">
              <div class="bg-shape">
                <img src="assets/BGMI.webp" alt="" />
              </div>
              <div class="product-slider__wrp swiper-wrapper">
                <div class="product-slider__item swiper-slide swiper-slide-active" style={{ width: '405px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>                  <div class="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                    alt="star wars" class="product-slider__cover" />
                  <div class="product-slider__content">
                    <h1 class="product-slider__title">
                      BGMI - Battleground Mobile
                    </h1>
                    <span class="product-slider__price">&#8377;22,495&#x2a;<sup>99</sup></span>
                    <span class="hr-vertical"></span>
                    <div class="product-ctr">
                      <div class="product-labels">
                        <div class="product-labels__title">DETAILS</div>

                        <div class="product-labels__group">
                          <label class="product-labels__item">
                            <span class="product-labels__txt">This is Description of User</span>
                          </label>


                        </div>

                      </div>


                    </div>
                    <span class="hr-vertical"></span>

                    <div class="product-slider__bottom">
                      <button class="product-slider__cart">
                        ADD TO CART
                      </button>

                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ maxWidth: '480px', height: '650px' }}>
            <div className="card">
              <div class="bg-shape">
                <img src="assets/BGMI.webp" alt="" />
              </div>
              <div class="product-slider__wrp swiper-wrapper">
                <div class="product-slider__item swiper-slide swiper-slide-active" style={{ width: '405px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>                  <div class="product-slider__card">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                    alt="star wars" class="product-slider__cover" />
                  <div class="product-slider__content">
                    <h1 class="product-slider__title">
                      BGMI - Battleground Mobile
                    </h1>
                    <span class="product-slider__price">&#8377;22,495&#x2a;<sup>99</sup></span>
                    <span class="hr-vertical"></span>
                    <div class="product-ctr">
                      <div class="product-labels">
                        <div class="product-labels__title">DETAILS</div>

                        <div class="product-labels__group">
                          <label class="product-labels__item">
                            <span class="product-labels__txt">This is Description of User</span>
                          </label>

                        </div>

                      </div>


                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
export default page