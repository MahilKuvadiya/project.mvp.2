'use client'

import React, { useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import classes from './sell.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [gameName, setGameName] = useState('BGMI');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [accountName, setAccountName] = useState('');
  const [specialFeature, setSpecialFeature] = useState('');
  const [priceString, setPrice] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return (
      <p className={classes.accessDenied}>
        Please Log In First
      </p>
    );
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !gameName || !desc || !accountName || !priceString) {
      toast.error('All fields are required');
      return;
    }

    setIsCreating(true);

    try {
      const imageUrl = await uploadImages();
      if (!imageUrl) {
        setIsCreating(false);
        return;
      }

      const videoUrl = await uploadVideo();

      const email = session?.user?.email;
      const data = {
        title,
        accountName,
        gameName,
        priceString,
        email,
        description: desc,
        image: imageUrl,
        video: videoUrl,
        specialFeature,
      };

      const res = await axios.post('/api/addGamingAccount', data);

      if (res.status === 200) {
        toast.success('Account added.');
        router.push('/profile');
      } else if (res.status === 201) {
        toast.error('Account already exists.');
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    } finally {
      setIsCreating(false);
    }
  };

  const uploadImages = async () => {
    const UPLOAD_PRESET = 'MVP_Trades';
    const CLOUD_NAME = 'dz4nwfxrd';

    if (images.length < 3) {
      toast.error('Please upload at least 3 images.');
      return null;
    } else if (images.length > 5) {
      toast.error('Maximum 5 Images are allowed.');
      return null;
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
          imageUrls.push(imageUrl);
        } else {
          console.log(response);
          throw new Error('Failed to upload image');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to upload images');
        return null;
      }
    }

    return imageUrls;
  };

  const uploadVideo = async () => {
    const UPLOAD_PRESET = 'MVP_Trades';
    const CLOUD_NAME = 'dz4nwfxrd';

    if (!video) return null;

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
      return videoUrl;
    } catch (error) {
      console.log(error);
      toast.error('Failed to upload video');
      return null;
    }
  };



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <input
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Account Name..."
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          >
            <option value="Asphalt 9">Asphalt 9</option>
            <option value="Valorent">Valorent</option>
            <option value="Clash Royal">Clash Royal</option>
            <option value="Clash Of Clans">Clash Of Clans</option>
            <option value="BGMI">BGMI</option>
          </select>
          <div className={classes.inputGroup}>
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
          <div className={classes.inputGroup}>
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
          <div className={classes.inputGroup}>
            <input
              type="number"
              placeholder="Integer Value..."
              value={priceString}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Any Special Feature..."
            value={specialFeature}
            onChange={(e) => setSpecialFeature(e.target.value)}
          />
          <button className={classes.createBlog} disabled={isCreating}>
            {isCreating ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
