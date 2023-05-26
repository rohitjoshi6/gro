import './videoThumbnail.css';
import ReactPlayer from 'react-player'

const VideoThumbnail = ({thumbnail, title, name, pic, video}) => {
    // const handleClick = (url) => {
    //     <ReactPlayer url={mediaUrl} />
    //     console.log("clicked");
    // };

    return (
        <div className="videoThumbnail" >
            <ReactPlayer url={video} controls={true} light={<img src={thumbnail} alt="demo" />} />
            {/* <img className="thumbnailimg"src={thumbnail} alt="thumbnail" /> */}
            <div className="videoThumbnail__info">
                {/* <img src={pic} alt="channelImage" /> */}
                <div className="videoThumbnail__text">
                    <h4>{title}</h4>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoThumbnail