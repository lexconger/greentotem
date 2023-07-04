import {useState, useEffect} from 'react'
import logo from '../resources/treeTotem1.svg'
import './TitleThree.css';

function TitleThree() {

    return(
        <div className="titleWrapper">
            <div className="logoWrapper">
                <img src={logo}></img>
            </div>
            <h1 className="title">Green Totem Designs</h1>
        </div>

    )
}


export default TitleThree;