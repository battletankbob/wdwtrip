import React from 'react'
import './Programs.css'
import program_1 from '../../assets/mk-map-pen.png'
import program_2 from '../../assets/map-2.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} usemap="#mk-map" alt='right arrow' className='map'/>
        <map name="mk-map" className='map-areas'>
            <area target="" alt="fountain" title="fountain" href="mk/mk-fountain.html" coords="629,384,579,348" shape="rect"/>
            <area target="" alt="mk-gate" title="mk-gate" href="./mk/mk-gate.html" coords="643,1014,568,977" shape="rect"/>
            <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
            <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
        </map>
      </div>
    </div>
  )
}

export default Programs
