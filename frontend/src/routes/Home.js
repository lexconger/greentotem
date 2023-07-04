import './Home.css'
import {useState, useEffect} from 'react'
import TitleOne from '../components/TitleOne';
import TitleTwo from '../components/TitleTwo';
import TitleThree from '../components/TitleThree';
import TitleStatic from '../components/TitleStatic';
import ContactButton from '../components/ContactButton';
import NavBar from '../components/NavBar';

function Home() {

  return (
    <div className="page_home">
      <ContactButton />
      <NavBar />
      <div className="titleContainer">
        {/* <TitleStatic/> */}
        <TitleThree/>
      </div>

    </div>
    
  );
}

export default Home;
