import React from 'react';
import '../css/Home.css';
import {Product} from './Product';


export const Home = () => {


  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2020/img/Prime/XCM_Manual_1280301_1439664_AU_au_prime_gw_gesktop_hero_v1_1_3493098_1500x600_1X_en_AU._CB417954628_.jpg' alt='prime'></img>
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
