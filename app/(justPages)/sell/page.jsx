'use client'
import React, { useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
// import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation"
import './sell.css';
import { toast } from "react-hot-toast"

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [gameName, setgameName] = useState('BGMI');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState();
  const [accountName, setAccountName] = useState('');
  const [specialFeature, setSpecialFeature] = useState('');
  const [priceString, setprice] = useState('');

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return (
      <p className="accessDenie">
        Please Sign In First
      </p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !gameName || !desc || !accountName || !priceString) {
      toast.error('All fields are required');
      return;
    }

    try {
      const imageUrl = await uploadImage();
      if(!imageUrl){
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
      };

      const res = await axios.post('/api/addGamingAccount', data);

      if (res.status === 200) {
        // Account created successfully
        const responseData = res.data;
        // Process the data as needed
        toast.success('Account added.');
        router.push('/');
      } else if (res.status === 201) {
        // Account already exists
        toast.error('Account already exists.');
      } else {
        // Other error occurred
        toast.error('Something went wrong.');
      }
    } catch (error) {
      //   console.log(error);
      toast.error('Something went wrong!');
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
      console.log(videoUrl)
      return videoUrl;
    } catch (error) {
      console.log(error);
      toast.error('Failed to upload video');
    }
  }

  const uploadImage = async () => {
    const UPLOAD_PRESET = 'MVP_Trades';
    const CLOUD_NAME = 'dz4nwfxrd';

    if (images.length < 3) {
      toast.error("Please upload atleast 3 images.")
      return;
    } else if (images.length > 5) {
      toast.error("Maximum 5 Images are allowed.")
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
          console.log(imageUrl)
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

    console.log(imageUrls)
    return imageUrls;
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className='text'>Title</div>
            <input className='title'
              type="text"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className='text'>Account Name</div>
            <input className='acc'
              type="text"
              placeholder="Account Name..."
              onChange={(e) => setAccountName(e.target.value)}
            />
          <div className='text'>Description</div>
          </div>
          <textarea
            placeholder="Description..."
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className='text'>Select Game</div>
          <select
            value={gameName}
            onChange={(e) => setgameName(e.target.value)}
          >
            <option value="Asphalt 9">Asphalt 9</option>
            <option value="Valorent">Valorent</option>
            <option value="Clash Royal">Clash Royal</option>
            <option value="Clash Of Clans">Clash Of Clans</option>
            <option value="BGMI">BGMI</option>
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
          <div className='text'>Price</div>
          <div className="inputGroup">
            <input
              type="number"
              placeholder="Set Price"
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className='text'>Special Feature</div>
          <textarea
            placeholder="Add Any Special Feature..."
            onChange={(e) => setSpecialFeature(e.target.value)}
          />
          <button className="createBlog">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
