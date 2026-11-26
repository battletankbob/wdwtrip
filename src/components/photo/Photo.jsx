import React, { useRef } from 'react'
import './Photo.css'
import mk1 from '../../assets/mk/20250124_083803.jpg'
import mk2 from '../../assets/mk/20250124_083810.jpg'
import right_arrow from '../../assets/arrow.png'
import next_icon from '../../assets/thisway.png'
import back_icon from '../../assets/thatway.png'

const Photo = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='photos'>
      <div className='gallery'>
        <img src={mk1} alt="" />
        <img src={mk2} alt="" />
      </div>
      <button className='btn dark-btn'>See more <img src={right_arrow} alt=""/></button>
      
      <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='photo-info'>
                            <img src={mk1} alt="" />
                            <div>
                                <h3>name/summary</h3>
                                <p>some info/flavor text</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='photo-info'>
                            <img src={mk2} alt="" />
                            <div>
                                <h3>name/summary</h3>
                                <p>some info/flavor text</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Photo
