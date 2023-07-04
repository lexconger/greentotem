import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import TitleOne from './components/TitleOne';
import TitleTwo from './components/TitleTwo';
import TitleThree from './components/TitleThree';
import ContactButton from './components/ContactButton';

function App() {

  return (
    <div className="page">
      <ContactButton/>
      <div className="navBarContainer">
      </div>
      <div className="titleContainer">
        <TitleThree/>
      </div>
    </div>
  );
}

export default App;
