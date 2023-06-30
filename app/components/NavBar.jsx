"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Image from "next/image";
import '../pag123.css'
// import '../../app/pag.css'
const style1 = { display: 'flex', justifycontent: 'center', flexdirection: 'row', alignitems: 'center', margininline: '10px' }
const NavBar = () => {
  const { data: session } = useSession()
  return (
    // <h5>hello</h5>
    <>
    
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a href="/" class="navbar-brand"><img src="assets/onlyLogo.png" height="50px" width="50px"></img></a>

          {/* <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4" /> */}
          {/* <button type="button" class="navbar-toggler ml-auto custom-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <img src="drop-down-menu.png" alt="" height="35px" width="35px" />
          </button> */}
          {/* <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="/" class="nav-item nav-link active">Home</a>
              <a href="#" class="nav-item nav-link">Profile</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">Inbox</a>
                  <a href="#" class="dropdown-item">Sent</a>
                  <a href="#" class="dropdown-item">Drafts</a>
                </div>
              </div>
            </div>
                <a href="/home" class="nav-item nav-link" style={{ paddingLeft: '20px', borderLeft: '1px solid white' }}>Login</a>
              </div> */}
            <div style={Object.assign({}, style1)}>
              {/* <form class="d-flex">
                <div class="input-group">
                
                  <button type="button" style={{ background: 'none !important', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid white', borderRradius: '0px !important' }}><img src="assets/components-search.png" height="25px" width="25px" alt="" /></button>
                  <input id="search" type="text" class="form-control" placeholder="Search" style={{ marginRight: '20px' }} />
                </div>
              </form> */}
              
              <div>
              {session?.user?(
                <>
                
              <div style={{display:'flex',justifyContent: 'center'}}>
              <div>
              <a href="/profile" class="nav-item nav-link" style={{color:'grey'}}>Profile</a>
              </div>
        <a class="nav-item nav-link" style={{ paddingLeft: '20px', borderLeft: '1px solid white',color:'white' }} onClick={() => signOut()}>Sign Out</a>
        <a href="/dashboard">
        <Image
                src={session?.user.image}
                width={52}
                height={52}
                className='rounded-circle'
                alt='profile'
                id='prof'
        />
        </a>
        </div>
        </>

    ):(
      <a  class="nav-item nav-link" style={{ paddingLeft: '20px', borderLeft: '1px solid white',color:'grey' }} onClick={() => signIn('google')}>Sign In</a>
    )}
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}


export default NavBar


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// const style1 = { display: 'flex', justifycontent: 'center', flexdirection: 'row', alignitems: 'center', margininline: '10px' }


// const Nav = () => {
//   const { data: session } = useSession();

//   const [providers, setProviders] = useState(null);
//   const [toggleDropdown, setToggleDropdown] = useState(false);

//   useEffect(() => {
//     const setUpProviders = async () => {
//       const response = await getProviders();

//       setProviders(response)
//     }
//     setUpProviders();


//     // const style2 = {background: none; border-top: none; borderleft: none, borderright: none, borderbottom: '2px solid white', border-radius: '0px'}
//   }, []);


//   return (
    
//     <div>
//       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
//       <nav class="navbar navbar-expand-lg">
//         <div class="container-fluid">
//           <a href="#" class="navbar-brand"><img src="assets/onlyLogo.png" height="50px" width="50px"></img></a>

//           <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4" />
//           <button type="button" class="navbar-toggler ml-auto custom-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <img src="drop-down-menu.png" alt="" height="35px" width="35px" />
//           </button>
//           <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//             <div class="navbar-nav">
//               <a href="#" class="nav-item nav-link active">Home</a>
//               <a href="#" class="nav-item nav-link">Profile</a>
//               <div class="nav-item dropdown">
//                 <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
//                 <div class="dropdown-menu">
//                   <a href="#" class="dropdown-item">Inbox</a>
//                   <a href="#" class="dropdown-item">Sent</a>
//                   <a href="#" class="dropdown-item">Drafts</a>
//                 </div>
//               </div>
//             </div>
//             <div style={Object.assign({}, style1)}>
//               <form class="d-flex">
//                 <div class="input-group">
//                   <button type="button" style={{ background: 'none !important', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid white', borderRradius: '0px !important' }}><img src="assets/components-search.png" height="25px" width="25px" alt="" /></button>
//                   <input id="search" type="text" class="form-control" placeholder="Search" style={{ marginRight: '20px' }} />
//                 </div>
//               </form>
//               <div class="navbar-nav">
//                 <a href="/home" class="nav-item nav-link" style={{ paddingLeft: '20px', borderLeft: '1px solid white' }}>Login</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;