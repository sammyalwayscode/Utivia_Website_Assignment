mport React from 'react'
import Logo from "../Img/lo.png"
import "./Header.css"
import vid from "../Video/vid.mp4"
import Body from '../Body/Body'

function Header() {
  return (
    <div className="parentDiv">
      <div className="childDiv">

        <div className="Logo"><img src={Logo} alt="Logo" /></div>

        <div className="textDiv">
          <p className="pTag">About</p>
          <p className="pTag">Academy</p>
          <p className="pTag">For Enterprise</p>
          <button className="buttonTag">Get Started</button>
        </div>

      </div>

      <div className="secondText">
        <p className="blueText">Prioritize your</p>
        <p className="orangeText">Tech Transition||</p>
        <p className="planeText">To learn the top skills in tech, it starts with being a part of the best network that puts you first.</p>
      </div>

      <div>
        <video src={vid} alt="Video" controls="play" className="vedio" />
      </div>
      <Body />
    </div>
  )
}

export default Header
