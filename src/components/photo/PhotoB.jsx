import React, { useEffect, useState } from 'react';
import next_icon from '../../assets/thisway.png'
import back_icon from '../../assets/thatway.png'


const Thumbnail = ({ arr, image, index}) => {
  return (
  <div className='thumbnail'>
    {arr.map((imgsrc, i) => (
      <img 
        key={i} 
        height="50" 
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

function PhotoB(){
  return (<div className='photos'>
    <h1>SlideShow!?</h1>
    <Slideshow
      imgs={[
        '../../src/assets/mk/20250124_083803.jpg',
        '../../src/assets/mk/20250124_083810.jpg'
      ]}
    />


  </div>
  )
}

export default PhotoB
