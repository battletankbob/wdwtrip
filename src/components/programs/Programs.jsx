import React from 'react'
import './Programs.css'
import poly_map from '../../assets/poly-map.png'
import ds_map from '../../assets/disney-springs-map.png'
import mk_map from '../../assets/mk-map-pen.png'
import mk_map_sm from '../../assets/mk-map-small.png'
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
          {/* <img src={mk_map} usemap="#mk-map" alt='right arrow' className='map map-b'/>
          <img src={mk_map_sm} usemap="#mk-map" alt='right arrow' className='map map-sm'/>
          <map name="mk-map" className='map-areas'>
                <area target="" alt="fountain" title="fountain" href="./mk-fountain" coords="629,384,579,348" shape="rect"/>
                <area target="" alt="mk-gate" title="mk-gate" href="./mk-gate" coords="643,1014,568,977" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk-skipper" coords="1226,776,1451,740" shape="rect"/>
                <area target="" alt="skipper-canteen" title="skipper-canteen" href="./mk-skipper" coords="406,567,450,628" shape="rect"/>
            </map> */}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2560 1165">
              <image width="2560" height="1165" xlinkHref={mk_map}></image> 
              <a xlinkHref="./mk-skipper">
                <rect x="385" y="564" fill="#fff" opacity="0" width="100" height="100"></rect>
              </a><a xlinkHref="./mk-skipper">
                <rect x="1233" y="718" fill="#fff" opacity="0" width="244" height="100"></rect>
              </a><a xlinkHref="./mk-pvh">
                <rect x="543" y="190" fill="#fff" opacity="0" width="100" height="89"></rect>
              </a><a xlinkHref="./mk-carousel">
                <rect x="611" y="286" fill="#fff" opacity="0" width="120" height="51"></rect>
              </a><a xlinkHref="./mk-fountain">
                <rect x="579" y="357" fill="#fff" opacity="0" width="77" height="66"></rect>
              </a><a xlinkHref="./mk-birds">
                <rect x="557" y="497" fill="#fff" opacity="0" width="72" height="77"></rect>
              </a><a xlinkHref="./mk-gate">
                <rect x="557" y="940" fill="#fff" opacity="0" width="100" height="100"></rect>
              </a><a xlinkHref="./mk-train">
                <rect x="1036" y="164" fill="#fff" opacity="0" width="100" height="100"></rect>
              </a><a xlinkHref="./mk-carousel">
                <rect x="1581" y="570" fill="#fff" opacity="0" width="171" height="66"></rect>
              </a><a xlinkHref="./mk-pvh">
                <rect x="1926" y="108" fill="#fff" opacity="0" width="228" height="70"></rect>
              </a>
            </svg>
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
