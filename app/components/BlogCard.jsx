'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './blogCard.module.css'
// import { useSession } from 'next-auth/react'
// import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const BlogCard = ({ blog: { title, accountName, image, gameName ,id} }) => {

  const imageUrl = image[0]

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.imgContainer} href={`/blog/${id}`}>
          <Image src={imageUrl} width="350" height="350" />
        </Link>
        <div className={classes.blogData}>
          <div className={classes.left}>
            <h3>{title}</h3>
            <p>{gameName}</p>
            <span>Created By: <span>1th of January</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard