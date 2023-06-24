'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import './Buy.css'
const Buy = () => {
  const [color, setColor] = useState('blue')
  useEffect(() => setColor('red'), [])
    return(
      <div>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'></script>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        <script src="https://cdn.korzh.com/metroui/v4/js/metro.min.js"></script>
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"/>
        <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"></link>

   <div className="container-fluid d-flex justify-content-center">
  <div className="row mt-5" style={{justifyContent:'center'}}>
    <div className="col-sm-4" style={{maxWidth:'480px'}}>
      <div className="card">
    <img src="assets/BGMI.webp" className="card-img-top" width="100%"/>
    <div className="card-body pt-0 px-0">
      <div className="d-flex flex-row justify-content-between mb-0 px-3">
        <small className="text-muted mt-1">STARTING AT</small>
        <h6>&#8377;22,495&#x2a;</h6>
      </div>
      <hr className="mt-2 mx-3"/>
      <div className="d-flex flex-row justify-content-between px-3 pb-4">
        <div className="d-flex flex-column"><span className="text-muted">Rating</span><small className="text-muted">USER&#x2a;</small></div>
        <div className="d-flex flex-column"><h5 className="mb-0"><input data-role="rating" data-value="3" /></h5><small className="text-muted text-right" >(3856)</small></div>
      </div>
      <div className="d-flex flex-row justify-content-between p-3 mid">
        <div className="d-flex flex-column"><small className="text-muted mb-1">Level/Rank</small><div className="d-flex flex-row"><img src="assets/level1.png" width="35px" height="25px"/><div className="d-flex flex-column ml-1"><small className="ghj">104 Level</small><small className="ghj">1.5 K/D</small></div></div></div>
        <div className="d-flex flex-column"><small className="text-muted mb-2">Special</small><div className="d-flex flex-row"><img src="assets/gift.png" width="25px" height="25px"/><h6 className="ml-1">Glacier Skin&#x2a;</h6></div></div>
      </div>
      <small className="text-muted key pl-3">Standard key Features</small>
      <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block" style={{ width:'100%'}}><small>BUY NOW</small></button></div>
      <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
    <div className="col-sm-4" style={{maxWidth:'480px'}}>
      <div className="card">
    <img src="assets/BGMI.webp" className="card-img-top" width="100%"/>
    <div className="card-body pt-0 px-0">
      <div className="d-flex flex-row justify-content-between mb-0 px-3">
        <small className="text-muted mt-1">STARTING AT</small>
        <h6>&#8377;22,495&#x2a;</h6>
      </div>
      <hr className="mt-2 mx-3"/>
      <div className="d-flex flex-row justify-content-between px-3 pb-4">
        <div className="d-flex flex-column"><span className="text-muted">Rating</span><small className="text-muted">USER&#x2a;</small></div>
        {/* <div className="d-flex flex-column"><h5 className="mb-0"><input data-role="rating" data-value="3"/></h5><small className="text-muted text-right">(3085)</small></div> */}
      </div>
      <div className="d-flex flex-row justify-content-between p-3 mid">
        <div className="d-flex flex-column"><small className="text-muted mb-1">Level/Rank</small><div className="d-flex flex-row"><img src="assets/level1.png" width="35px" height="25px"/><div className="d-flex flex-column ml-1"><small className="ghj">104 Level</small><small className="ghj">1.5 K/D</small></div></div></div>
        <div className="d-flex flex-column"><small className="text-muted mb-2">Special</small><div className="d-flex flex-row"><img src="assets/gift.png" width="25px" height="25px"/><h6 className="ml-1">Glacier Skin&#x2a;</h6></div></div>
      </div>
      <small className="text-muted key pl-3">Standard key Features</small>
      <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block" style={{ width:'100%'}}><small>BUY NOW</small></button></div>
      <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
  <div className="col-sm-4" style={{maxWidth:'480px'}}>
    <div className="card">
    <img src="assets/BGMI.webp" className="card-img-top" width="100%"/>
    <div className="card-body pt-0 px-0">
      <div className="d-flex flex-row justify-content-between mb-0 px-3">
        <small className="text-muted mt-1">STARTING AT</small>
        <h6>&#8377;22,495&#x2a;</h6>
      </div>
      <hr className="mt-2 mx-3"/>
      <div className="d-flex flex-row justify-content-between px-3 pb-4">
        <div className="d-flex flex-column"><span className="text-muted">Rating</span><small className="text-muted">USER&#x2a;</small></div>
        <div className="d-flex flex-column"><h5 className="mb-0"><input data-role="rating" data-value="3"/></h5><small className="text-muted text-right">(3085)</small></div>
      </div>
      <div className="d-flex flex-row justify-content-between p-3 mid">
        <div className="d-flex flex-column"><small className="text-muted mb-1">Level/Rank</small><div className="d-flex flex-row"><img src="assets/level1.png" width="35px" height="25px"/><div className="d-flex flex-column ml-1"><small className="ghj">104 Level</small><small className="ghj">1.5 K/D</small></div></div></div>
        <div className="d-flex flex-column"><small className="text-muted mb-2">Special</small><div className="d-flex flex-row"><img src="assets/gift.png" width="25px" height="25px"/><h6 className="ml-1">Glacier Skin&#x2a;</h6></div></div>
      </div>
      <small className="text-muted key pl-3">Standard key Features</small>
      <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block" style={{ width:'100%'}}><small>BUY NOW</small></button></div>
      <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
    <div className="col-sm-4" style={{maxWidth:'480px'}}>
    <div className="card">
    <img src="assets/BGMI.webp" className="card-img-top" width="100%"/>
    <div className="card-body pt-0 px-0">
      <div className="d-flex flex-row justify-content-between mb-0 px-3">
        <small className="text-muted mt-1">STARTING AT</small>
        <h6>&#8377;22,495&#x2a;</h6>
      </div>
      <hr className="mt-2 mx-3"/>
      <div className="d-flex flex-row justify-content-between px-3 pb-4">
        <div className="d-flex flex-column"><span className="text-muted">Rating</span><small className="text-muted">USER&#x2a;</small></div>
        <div className="d-flex flex-column"><h5 className="mb-0"><input data-role="rating" data-value="3"/></h5><small className="text-muted text-right">(3085)</small></div>
      </div>
      <div className="d-flex flex-row justify-content-between p-3 mid">
        <div className="d-flex flex-column"><small className="text-muted mb-1">Level/Rank</small><div className="d-flex flex-row"><img src="assets/level1.png" width="35px" height="25px"/><div className="d-flex flex-column ml-1"><small className="ghj">104 Level</small><small className="ghj">1.5 K/D</small></div></div></div>
        <div className="d-flex flex-column"><small className="text-muted mb-2">Special</small><div className="d-flex flex-row"><img src="assets/gift.png" width="25px" height="25px"/><h6 className="ml-1">Glacier Skin&#x2a;</h6></div></div>
      </div>
      <small className="text-muted key pl-3">Standard key Features</small>
      <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block" style={{ width:'100%'}}><small>BUY NOW</small></button></div>
      <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
  
  </div>
</div>
</div>
);
} 
export default Buy