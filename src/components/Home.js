import React,{useRef} from 'react';
import '../css/Home.css';
import {Product} from './Product';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const Home = () => {
  const imgRef = useRef(null);
  var imgArray = [];
  imgArray[0] = 'https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Prime/XCM_Manual_1280301_1439664_AU_au_prime_gw_gesktop_hero_v1_1_3493098_1500x600_1X_en_AU._CB417954628_.jpg';
  imgArray[1] ='https://i.gadgets360cdn.com/large/jio_fiber_amazon_prime_1591959546653.jpg';
  imgArray[2] ='https://images-eu.ssl-images-amazon.com/images/G/02/prime/Gateway/new_ft_hero_van._CB430308860_.jpg';
  imgArray[3] ='https://images-fe.ssl-images-amazon.com/images/G/35/x-site/events/BOXING-DAY/Hero/XCM_Manual_1297574_1519347_AU_AUSGBFCM_au_xsite_desktop_tall_hero_2x_3606723_1500x600_1X_en_AU._CB413514042_.jpg';
  var i = 0;
  const imageSlide=(e)=>{
    const slideImage =document.getElementById('image');

    if(e.target.id ==='rightButton'){
      i++;
      if(i>imgArray.length-1){
        i=0;
      }
    }
    if(e.target.id ==='leftButton'){
      i--;
      if(i<0){
        i= imgArray.length-1;
      }
    }
    slideImage.src = imgArray[i];
  }
  return (
    <div className='home'>
      <div className='home_container'>
        <div className="home_slide">
          <NavigateBeforeIcon onClick={imageSlide} id='leftButton'className='home_slideLeftButton button'/>
          <img id='image' ref={imgRef} className='home_image' src={imgArray[i]} alt='prime'></img>
          <NavigateNextIcon onClick={imageSlide}id='rightButton'className='home_slideRightButton button'/>
        </div>
        <div className='home_row'>
          <Product
            id={12131231231}
            title='The Intelligent Investor Paperback – Illustrated, 27 August 2003'
            rating={4}
            price={19.99}
            image='https://www.investopedia.com/thmb/k-KuJXy6HUSb1No95Ot_ydx6CDA=/2560x2560/filters:no_upscale():max_bytes(150000):strip_icc()/the-intelligent-investor-25099a7263cb499f80de8b20d6b4ab86.jpg'
            />
          <Product
            id={5434232}
            title="MERRY'S Unisex Polarized Aluminum Sunglasses Vintage Sun Glasses For Men/Women S8286"
            price={19.91}
            rating={5}
            image="https://m.media-amazon.com/images/I/31ypTp0dFcL._AC_SY200_.jpg"
            />
        </div>
        <div className='home_row'>
          <Product
            id={2543333}
            title='Nintendo Switch Lite Console [Coral]'
            price={329.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/51iPtzsdbzL._AC_UY218_.jpg"
            />
          <Product
            id={213214}
            title='POPETPOP Black Smart Wristband Replacement Band Ethnic Watch Strap Retro Style Watch Leather Strap Bracelet Compatible for Xiaomi Mi Band 5/5 NFC'
            price={16.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51U1RSYiGdL._AC_SY200_.jpg"
            />
          <Product
            id={122323}
            title='Contigo AUTOSEAL West Loop Vaccuum-Insulated Stainless Steel Travel Mug, 16 oz, Radiant Orchid Trans Matte'
            price={27.79}
            rating={4}
            image="https://images-fe.ssl-images-amazon.com/images/I/41so6LvrcjL._AC_AA218_.jpg"
            />
        </div>
        <div className='home_row'>
          <Product
            id={242455511}
            title='HUAWEI MateBook D 15 - 15.6 Inch Laptop with FullView 1080P FHD Ultrabook PC (AMD Ryzen 7, 8GB RAM, 512GB SSD, Windows 10 Home, Multi-Screen Collaboration, Fingerprint Reader), Space Grey'
            price={1054.39}
            rating={10}
            image='https://images-na.ssl-images-amazon.com/images/I/61SgSnHpYRL._AC_SL1000_.jpg'
            />
        </div>
      </div>
    </div>
  )
}
