import React, { useEffect, useState } from 'react';
import next_icon from '../../../assets/thisway.png'
import back_icon from '../../../assets/thatway.png'
import video from '../../../assets/mk/20250124_074003.mp4'


const Thumbnail = ({ arr, image, index}) => {
  return (
  <div className='thumbnail'>
    {arr.map((imgsrc, i) => (
      <img 
        key={i} 
        src={imgsrc} 
        onClick={() => image(i)}
        className={index === i ? 'active' : ''} />
    ))}
  </div>
  )
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0){
      setIndex(imgs.length - 1)
    }else{
      setIndex(index - 1)
    }
  }

  return (
    <div className='slideshow'>
      <img className='mainImg' src={imgs[index]} />
      <div>
        <button className='back-btn' onClick={prev}><img src={back_icon} alt="pevious"/></button>
        <button className='next-btn' onClick={next}><img src={next_icon} alt="next"/></button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
}



function Mkgate(){
  return (
  <div className='photos'>
    <h1>Magic Kingdom Entrance</h1>
    <p>Arrived at the early hours day, rode the monorail, and waitied for the gates to open.</p>
        <Slideshow
      imgs={[
        './src/assets/mk/20250124_073953.jpg',
        './src/assets/mk/20250124_074000.jpg',
        './src/assets/mk/20250124_075007.jpg',
        './src/assets/mk/20250124_075008.jpg',
        './src/assets/mk/20250124_075017.jpg',
        './src/assets/mk/20250124_075028.jpg',
        './src/assets/mk/20250124_075104.jpg',
        './src/assets/mk/20250124_075106.jpg',
        './src/assets/mk/20250124_080103.jpg'
      ]}
    />
    <h2>On our way!</h2>
    <p>First park day here we come!</p>
    <video controls >
      <source src={video} type="video/mp4"/>
     </video>
  </div>
  )
}


export default Mkgate

