import React from 'react'
import './Programs.css'
import poly_map from '../../assets/poly-map.png'
import ds_map from '../../assets/disney-springs-map.png'
import mk_map from '../../assets/mk-map-pen.png'
import ak_map from '../../assets/ak-map.png'
import hw_map from '../../assets/hw-map.png'
import epcot_map from '../../assets/epcot-map.png'
import Title from '../title/Title'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'


const Programs = () => {
  return (
    <div className='apple'>
      <Navbar/>
      <Hero/>
      <div className='programs'>

        <Title title="Polynesian resort" subTitle="Wednesday - January 22nd through Tuesday - January 28th, 2025"/>
        <div className='program poly'>
          <img src={poly_map} usemap="#poly-map" alt='right arrow' className='map'/>
          <map name="poly-map" className='map-areas'>
              <area target="" alt="fountain" title="fountain" href="mk/mk-fountain.html" coords="629,384,579,348" shape="rect"/>
              <area target="" alt="mk-gate" title="mk-gate" href="./mk/mk-gate.html" coords="643,1014,568,977" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
          </map>
        </div>

        <Title title="Disney Springs" subTitle="Thursday - January 23rd, 2025 (and national holiday: Natalie's birthday!)"/>
        <div className='program ds'>
          <img src={ds_map} usemap="#ds-map" alt='right arrow' className='map'/>
          <map name="ds-map" className='map-areas'>
              <area target="" alt="fountain" title="fountain" href="mk/mk-fountain.html" coords="629,384,579,348" shape="rect"/>
              <area target="" alt="mk-gate" title="mk-gate" href="./mk/mk-gate.html" coords="643,1014,568,977" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
          </map>
        </div>

        <Title title="Magic Kingdom Park" subTitle="Friday - January 24th, 2025"/>
        <div className='program mk'>
          <img src={mk_map} usemap="#mk-map" alt='right arrow' className='map'/>
          <map name="mk-map" className='map-areas'>
                <area target="" alt="fountain" title="fountain" href="./mk-fountain" coords="629,384,579,348" shape="rect"/>
                <area target="" alt="mk-gate" title="mk-gate" href="./mk-gate" coords="643,1014,568,977" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk-skipper" coords="1226,776,1451,740" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk-skipper" coords="406,567,450,628" shape="rect"/>
            </map>
        </div>

        <Title title="Animal Kingdom Park" subTitle="Saturday - January 25th, 2025"/>
        <div className='program animalk'>
          <img src={ak_map} usemap="#ak-map" alt='right arrow' className='map'/>
          <map name="ak-map" className='map-areas'>
                <area target="" alt="fountain" title="fountain" href="./mk-fountain" coords="629,384,579,348" shape="rect"/>
                <area target="" alt="mk-gate" title="mk-gate" href="./mk-gate" coords="643,1014,568,977" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
            </map>
        </div>

        <Title title="Hollywood Studio Park" subTitle="Sunday - January 26th, 2025"/>
        <div className='program hw'>
          <img src={hw_map} usemap="#hw-map" alt='right arrow' className='map'/>
          <map name="hw-map" className='map-areas'>
                <area target="" alt="fountain" title="fountain" href="./mk-fountain" coords="629,384,579,348" shape="rect"/>
                <area target="" alt="mk-gate" title="mk-gate" href="./mk-gate" coords="643,1014,568,977" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
            </map>
        </div>

        <Title title="Epcot" subTitle="Monday - January 27th, 2025"/>
        <div className='program epcot'>
          <img src={epcot_map} usemap="#epcot-map" alt='right arrow' className='map'/>
          <map name="epcot-map" className='map-areas'>
              <area target="" alt="fountain" title="fountain" href="mk/mk-fountain.html" coords="629,384,579,348" shape="rect"/>
              <area target="" alt="mk-gate" title="mk-gate" href="./mk/mk-gate.html" coords="643,1014,568,977" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="1226,776,1451,740" shape="rect"/>
              <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk/mk-skipper-canteen.html" coords="406,567,450,628" shape="rect"/>
          </map>
        </div>

      </div>
    </div>
  )
}

export default Programs
