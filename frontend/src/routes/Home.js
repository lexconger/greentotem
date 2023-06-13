import './Home.css'
import {useState, useEffect} from 'react'
import TitleOne from '../components/TitleOne';
import TitleTwo from '../components/TitleTwo';
import TitleStatic from '../components/TitleStatic';
import NavMenu from '../components/NavMenu';

function Home() {

  return (
    <div className="home-page">
      <a href="contact">contact</a>
      <NavMenu></NavMenu>
      <div className="container">
          <div className="titleContainer">
            {/* <TitleOne /> */}
            {/* <TitleTwo /> */}
            <TitleStatic />
          </div>
        </div>
    </div>
    
  );
}

export default Home;
