/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'
import VideoThumbnail from '../Components/VideoThumbnail/videoThumbnail'
import './landingPage.css'

const landingPage = () => {
    const [videos, setVideos] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch(`https://internship-service.onrender.com/videos?page=${pageNumber}`)
            const data = await response.json()
            setVideos(data.data.posts)
            console.log("data is : ", data.data.posts)
        }
        fetchVideos()
    }
    , [pageNumber])

    const handleClick = async() => {
        setPageNumber(pageNumber + 1)
    }

    return (
        <>
        <div className='button'>
            <button  onClick={handleClick}>Next Page</button>
        </div>
        <div className='container'>
            {videos.map((video) => (
                <VideoThumbnail key={video.postId} name={video.creator.name} title={video.submission.title} thumbnail={video.submission.thumbnail} pic={video.creator.pic} video={video.submission.mediaUrl} />
            ))}
        </div>
        </>
    )
}

export default landingPage;