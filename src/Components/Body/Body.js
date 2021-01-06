import React from 'react'
import BodyCards from '../BodyCards/BodyCards'
import paterners from "../Img/pat.png"
import "./Body.css"

function Body() {
  return (
    <div className="firstDiv">
      <div className="secondDiv">
        <div className="Paterners"> <img src={paterners} alt="Paterners" /> </div>
        <div className="cardDiv">
          <div className="cardControllerDiv">
            <p className="smallYelloText">PREMIUM TECH SKILL<br /> TRAINING</p>
            <p className="largeWhiteText">Become a top talent<br /> that global employers<br /> hire without<br />hesitation.</p>
            <button className="Button">Start Here</button>
          </div>
        </div>

        <div className="textBeforeCards">
          <p className="smallGrayText">SAMMY TECHNOVATION</p>
          <p className="largeBlackText">Premium skills learning across the entire <br />digital product lifecycle: data, design,<br /> development, marketing, and product<br /> management.</p>
        </div>

      </div>

      <BodyCards />
    </div>
  )
}

export default Body
