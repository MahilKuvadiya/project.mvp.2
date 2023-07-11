'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import './sell.css';
import { toast } from 'react-hot-toast';
import User from '../../components/User';
import $ from "jquery";

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [gameName, setgameName] = useState('BGMI');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState();
  const [accountName, setAccountName] = useState('');
  const [specialFeature, setSpecialFeature] = useState('');
  const [priceString, setprice] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [gamingAccountID, setGamingAccountID] = useState('');
  const [gamingAccountPassword, setGamingAccountPassword] = useState('');

  const { data: session, status } = useSession();
  const router = useRouter();
  const anotherSession = useSession();

  const phoneNumber = User();

  useEffect(() => {
    if (anotherSession?.status === 'unauthenticated') {
      toast.error('Please login first.');
      router.push('/');
    }
    // if (phoneNumber === '') {
    //   toast.error('Complete your profile.');
    //   router.push('/dashboard');
    // }


  }, [anotherSession, phoneNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!title || !gameName || !desc || !accountName || !priceString || !specialFeature) {
      toast.error('All fields are required');
      return;
    }

    setIsCreating(true);

    try {
      const imageUrl = await uploadImage();
      if (!imageUrl) {
        setIsCreating(false);
        return;
      }
      const videoUrl = await uploadVideo();

      const email = session?.user?.email;
      const data = {
        title: title,
        accountName: accountName,
        gameName: gameName,
        priceString: priceString,
        email: email,
        description: desc,
        image: imageUrl,
        video: videoUrl,
        specialFeature: specialFeature,
        gamingAccountID: gamingAccountID,
        gamingAccountPassword: gamingAccountPassword,
      };

      const res = await axios.post('/api/addGamingAccount', data);

      if (res.status === 200) {
        const responseData = res.data;
        toast.success('Account added.');
        router.push('/profile');
      } else if (res.status === 201) {
        toast.error('Account already exists.');
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsCreating(false);
    }
  };

  const uploadVideo = async () => {
    const UPLOAD_PRESET = 'MVP_Trades';
    const CLOUD_NAME = 'dz4nwfxrd';

    if (!video) return;

    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
        formData
      );

      if (response.status !== 200) {
        throw new Error('Failed to upload video');
      }

      const videoUrl = response.data.secure_url;
      console.log(videoUrl);
      return videoUrl;
    } catch (error) {
      console.log(error);
      toast.error('Failed to upload video');
    }
  };

  const uploadImage = async () => {
    const UPLOAD_PRESET = 'MVP_Trades';
    const CLOUD_NAME = 'dz4nwfxrd';

    if (images.length < 3) {
      toast.error('Please upload at least 3 images.');
      return;
    } else if (images.length > 5) {
      toast.error('Maximum 5 Images are allowed.');
      return;
    }

    const imageUrls = [];
    for (const image of images) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', UPLOAD_PRESET);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );

        if (response.status === 200) {
          const imageUrl = response.data.secure_url;
          // console.log(imageUrl)
          imageUrls.push(imageUrl);
        } else {
          console.log(response);
          throw new Error('Failed to upload image');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to upload images');
        return [];
      }
    }

    console.log(imageUrls);
    return imageUrls;
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };
  $('#spec').keyup(function() {
    
    var characterCount = $(this).val().length,
        current = $('#spec-current'),
        maximum = $('#spec-maximum'),
        theCount = $('#the-count');
      
    current.text(characterCount);
        
  });
  $('#desc').keyup(function() {
    
    var desccharacterCount = $(this).val().length,
        current = $('#desc-current'),
        maximum = $('#desc-maximum'),
        theCount = $('#desc-count');
      
    current.text(desccharacterCount);
        
  });

  // setDesc(e.target.value);

  return (
    <div className="container">
      <div className="wrapper">
        <h2>Make A Sell</h2>

        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className="text">Title</div>
            <input
            maxLength={32}
              className="title"
              type="text"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text">Account Name</div>
            <input
            maxLength={32}
              className="acc"
              type="text"
              placeholder="Account Name..."
              onChange={(e) => setAccountName(e.target.value)}
            />
         </div>
         <div style={{display:'flex' , justifyContent:'space-between',alignItems:'center'}}>
            <div className="text">Special Feature</div>
            <div id="desc-count">
              <span id="spec-current" style={{color:'white'}}>0</span>
              <span id="spec-maximum" style={{color:'white'}}>/ 250 <small>max</small></span>
            </div>
            </div>
            <textarea
              id='spec'
              maxLength={250}
              placeholder="Add Any Special Feature..."
              onChange={(e) => setSpecialFeature(e.target.value)}
            />


            <div className="text">Select Game</div>
            <select value={gameName} onChange={(e) => setgameName(e.target.value)}>
              <option value="ASPHALT 9">ASPHALT 9</option>
              <option value="VALORENT">VALORENT</option>
              <option value="CLASH ROYAL">CLASH ROYAL</option>
              <option value="CLASH OF CLANS">CLASH OF CLANS</option>
              <option value="BGMI">BGMI</option>
              <option value="GTA 5">GTA 5</option>
              <option value="VALORANT">VALORANT</option>
              <option value="POKEMON GO">POKEMON GO</option>
              <option value="FORTNITE">FORTNITE</option>
              <option value="CLASH OF CLANS">CLASH OF CLANS</option>
              <option value="APEX LEGENDS">APEX LEGENDS</option>
              <option value="ASPHALT 9">ASPHALT 9</option>
              <option value="BGMI">BGMI</option>
              <option value="BOOM BEACH">BOOM BEACH</option>
              <option value="BRAWL STARS">BRAWL STARS</option>
              <option value="CALL OF DUTY">CALL OF DUTY</option>
              <option value="CS:GO">CS:GO</option>
              <option value="CROSSOUT">CROSSOUT</option>
              <option value="FIFA">FIFA</option>
              <option value="FORZA HORIZON">FORZA HORIZON</option>
              <option value="FREE FIRE">FREE FIRE</option>
              <option value="GENSHIN IMPACT">GENSHIN IMPACT</option>
              <option value="LEAGUE OF LEGENDS">LEAGUE OF LEGENDS</option>
              <option value="MARVEL MOBILE GAMES">MARVEL MOBILE GAMES</option>
              <option value="MINECRAFT">MINECRAFT</option>
              <option value="MORTAL COMBAT">MORTAL COMBAT</option>
              <option value="8 BALL POOL">8 BALL POOL</option>
              <option value="OTHER GAME">OTHER GAME</option>
            </select>
            <div className="inputGroup">
              <div className='text'>Upload Image/Video</div>
              <label htmlFor="image">
                Upload Image <AiOutlineFileImage />
              </label>
              <input
                id="image"
                type="file"
                style={{ display: 'none' }}
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="video">
                Upload video <AiOutlineFileImage />
              </label>
              <input
                id="video"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            <div style={{display:'flex' , justifyContent:'space-between',alignItems:'center'}}>
            <div className='text'>Description</div>
          <div id="the-count">
            <span id="desc-current" style={{color:'white'}}>0</span>
            <span id="desc-maximum" style={{color:'white'}}>/ 350 <small>max</small></span>
          </div>
          </div>
          <textarea
          id='desc'
            maxLength={350}
            placeholder="Description..."
            onChange={(e) => setDesc(e.target.value)}
          />
          
          <div className="text">Price</div>
          <div className="inputGroup">
            <input
              type="number"
              placeholder="Set Price"
              onChange={(e) => setprice(e.target.value)}
            />
          </div>

          <div className="text">Gaming Account ID <small>(Optional)</small></div>
          <input
            className="accountId"
            type="text"
            placeholder="Gaming Account ID..."
            onChange={(e) => setGamingAccountID(e.target.value)}
          />
          <div className="text">Gaming Account Password <small>(Optional)</small></div>
          <input
            className="accountPassword"
            type="password"
            placeholder="Gaming Account Password..."
            onChange={(e) => setGamingAccountPassword(e.target.value)}
          />
          <small>Note*- 20% of Amount from your sold account will be cut as MVP Trade's commission</small>
          <button className="createBlog" disabled={isCreating}>
            {isCreating ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
