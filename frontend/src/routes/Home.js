import './Home.css'
import {useState, useEffect} from 'react'
import TitleOne from '../components/TitleOne';
import TitleTwo from '../components/TitleTwo';
import TitleStatic from '../components/TitleStatic';

function Home() {

  return (
    <div className="container">
      <div className="titleContainer">
        {/* <TitleOne /> */}
        {/* <TitleTwo /> */}
        <TitleStatic />
      </div>
    </div>
  );
}

export default Home;
