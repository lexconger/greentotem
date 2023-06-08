import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import TitleOne from './components/TitleOne';
import TitleTwo from './components/TitleTwo';

function App() {

  return (
    <div className="container">
      <div className="titleContainer">
        {/* <TitleOne /> */}
        <TitleTwo />
      </div>
    </div>
  );
}

export default App;
