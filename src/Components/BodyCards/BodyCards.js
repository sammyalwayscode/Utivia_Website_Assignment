import React from 'react'
import "./BodyCards.css"
import Data from "../Img/Data.png"
import Development from "../Img/Development.png"
import Product from "../Img/Product.png"
import Digital from "../Img/Digital.png"
import Experience from "../Img/Experience.png"
import Ai from "../Img/AI.png"

function BodyCards() {
  return (
    <div className="mainCardDiv">
      <div className="secondCardDiv">


        <div className="couresCardDiv">


          <div className="holder">
            <img src={Data} alt="Data" />
            <p className="title">DATA</p>
            <p className="subTitle">Become a Data Analyst (Accelerator)</p>
            <p className="content">This course helps you accelerate your career<br /> into Data Analytics: Learn Structured Query<br /> Language and Power BI for Data Analytics and<br /> Visualization</p>
          </div>


        </div>








        <div className="couresCardDivNo1">

          <div className="holder">
            <img src={Development} alt="Development" />
            <p className="title">DATA</p>
            <p className="subTitle">Become a Data Analyst (Incubator)</p>
            <p className="content">Let us help you kick start a career from the<br /> basics of Data Analytics with a focus on <br />Advanced Excel and Structured Query Language<br /> with an internship opportunity.</p>
          </div>

        </div>






      </div>








      <div className="secondCardDiv1">


        <div className="couresCardDivNo2">


          <div className="holder">
            <img src={Product} alt="Product" />
            <p className="title">Product Management</p>
            <p className="subTitle">Become a Product Manager</p>
            <p className="content">The Sammy's Product School offers leading<br /> practices in product management and product<br /> prototyping through an experiential learning <br />process.</p>
          </div>


        </div>








        <div className="couresCardDivNo3">

          <div className="holder">
            <img src={Digital} alt="Digital" />
            <p className="title">360-Degree Marketing</p>
            <p className="subTitle">Become a Digital Marketer</p>
            <p className="content">The Sammy's Digital Marketing School helps you<br /> move from classroom to real work experience by<br /> helping you learn the tools, techniques, and<br /> practices of digital marketing.</p>
          </div>

        </div>






      </div>






      <div className="secondCardDiv2">


        <div className="couresCardDivNo4">


          <div className="holder">
            <img src={Experience} alt="Experience" />
            <p className="title">Product Design</p>
            <p className="subTitle">Become a UI/UX Designer</p>
            <p className="content">Our Instructor-led and hands-on training model<br /> helps you learn a combination of the art and<br /> science of tech product design with a 3-month<br /> virtual internship opportunity.</p>
          </div>


        </div>








        <div className="couresCardDivNo5">

          <div className="holder">
            <img src={Ai} alt="Ai" />
            <p className="title">Artificial Intelligence</p>
            <p className="subTitle">Become an AI Engineer</p>
            <p className="content">This program is designed to help you learn the <br />application of important ML techniques for<br /> solving real business problems and make key<br /> data-driven decisions for business growth.</p>
          </div>

        </div>






      </div>
      <button className="bodyButton">View All Courses</button>
    </div>
  )
}

export default BodyCards
