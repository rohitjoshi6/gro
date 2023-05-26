import './videoThumbnail.css';
import ReactPlayer from 'react-player'

const VideoThumbnail = ({thumbnail, title, name, pic, video}) => {
    // const handleClick = (url) => {
    //     <ReactPlayer url={mediaUrl} />
    //     console.log("clicked");
    // };

    return (
        <div className="videoThumbnail" >
            <div className='video'>
                <ReactPlayer url={video} controls={true}  light={<img src={thumbnail} alt="demo" width={300} height={300}  />} width='300px' height='300px' />
            </div>
            <div className="videoThumbnail__text">
                <h4>Title : {title}</h4>
                <p className='text'>Creator : {name}</p>
            </div>
        </div>
    );
};

export default VideoThumbnail