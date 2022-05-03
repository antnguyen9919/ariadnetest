import React,{useState,useRef} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image'
import ReactPlayer from 'react-player'
import styles from '../styles/VideoCarousel.module.css'

import Weko from '../public/Photos/Weko.jpg'
import Praktiker from '../public/Photos/Praktiker.jpg'
import Explainer from '../public/Photos/Explainer.jpg'
import Marien from '../public/Photos/Marien.jpg'

const responsive = {
  
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const VideoCarousel = () => {
 const images =[
  {
    id:0,url:Explainer,vid:"https://www.youtube.com/watch?v=LarUhK6GAmI"
},


  
     {

     id:1,url:Praktiker,vid:"https://youtu.be/UObhsmW9RgM"
        },

        {
          id:2, url:Weko, vid:"https://youtu.be/xFkPAAUrFAA"
              },
        
        
        {
            id:3,url:Marien,vid:"https://youtu.be/tWzIRapoac8"
        }

]
    const [videoOpen,setVideoOpen] = useState(false);
    const [current,setCurrent]=useState('')

    const handleClick = (image)=>{
        setCurrent(image.vid);
            setVideoOpen(!videoOpen)
            console.log(current)

    }
  
  return (
    <div>
               
      <div className='py-8'>
        {videoOpen?<div className=' bg-white flex flex-col justify-center justify-items-center' style={{position:'fixed',top:0, left:0,bottom:0,right:0,border:'none',margin:0,paddding:0,overflow:'hidden', width:'100%',height:'100%', zIndex:999999 }}>
          <div style={{position:'relative'}}  className='flex flex-row justify-end'  >
          <button className='rounded-full mb-1 mx-auto bg-red-500 px-3 text-white font-semibold' onClick={()=>setVideoOpen(false)}>Close</button>
          </div>
       
           <div className={styles.reactPlayer}>
           
           <ReactPlayer style={{position:'relative'}}  url={current}  playing={videoOpen} controls  width='100%' height="95%" />
           </div>
            

        </div> :<Carousel infinite 
     
      responsive={responsive} 
      autoPlaySpeed={10000}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      

      itemClass="px-4"
      >
           {images.map((image) => (
            <div key = {image.id}>
            <div className='cursor-pointer' onClick={()=>handleClick(image)}>
            <Image layout='responsive'   src = {image.url} key={image.id} />
            </div>

            
            
            </div>
         
          
        ))}
        
      </Carousel>}
      
     
      
     
      </div>
      
            
      
    </div>
  );
};

export default VideoCarousel;