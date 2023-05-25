/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'

const landingPage = () => {
  const [videos, setVideos] = useState([])

  const fetchVideos = async () => {
    const response = await fetch('https://internship-service.onrender.com/videos?page=2')
    const data = await response.json()
    setVideos(data.data.posts)
    console.log("data is : ", data.data.posts)
    }

    useEffect(() => {
        fetchVideos()
    }, [])

  return (
    <div>
       {videos.map((video) => (
         <ul>
         <div>{video.postId}</div>
         </ul>
        ))}
    </div>
  )
}

export default landingPage