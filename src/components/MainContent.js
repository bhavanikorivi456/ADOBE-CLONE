import React from "react";
import '../styles/MainContent.css'
import bigCardImage from '../assets/bigCardImg.webp'
import smallCardImage from '../assets/smallCardImg.webp'

const MainContent = ()=>{
    return (
        <div className="main-content">
            <h1>Which superpower will it be?</h1>
            <h4>Free creative fun or premium possibilities?</h4>
            <div className="card-container">
                <div className="card big">
                    <h5>ADOBE EXPRESS</h5>
                    <h2>Looking for a solution that's simple ,fun and free?</h2>
                    <p>desing flyers,logos,instagram posts and reels and more using all-in-one adobe Express templtes, fast easy and free.<br/>No, credit card required.</p>
                    <button className="btn">Get Adobe Express Free</button> 
                    <img src={bigCardImage} alt="Big card img"></img>
                </div>
                <div className="card small">
                    <h5>ADOBE CREATIVE CLOUD</h5>
                    <h2>Get the ultimate creative solution for personals.</h2>
                    <p>Save 48% off the first year on 20+ apps avilable through Creative Cloud All Apps Plan.
                        <del> &#8377; 4630.32/mo</del> now,<br/>&#8377; 2394.22/mo incl. <br/>GST.see terms[1]</p>
                    <button className="btn">Save Now</button>
                    <img src={smallCardImage} alt="Small card image"></img>
                </div>
            </div>
        </div>
    )
}
export default MainContent;