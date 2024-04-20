import React from 'react';
import '../styles/AdditionalContent.css';
import cardImage11 from '../assets/cardImage11.webp';
import cardImage12 from '../assets/cardImage12.webp';
import cardImage21 from '../assets/cardImage21.webp';
import cardImage22 from '../assets/cardImage22.webp';
import cardImage31 from '../assets/cardImage31.webp';
import cardImage32 from '../assets/cardImage32.webp';
import cardImage33 from '../assets/cardImage33.webp';


const AdditionalContent = () => {
  return (
    <div className='additional-content'>
        
        <div className="additional-buttons">
            <h3>Creative Cloud for:</h3>
            <button>Everyone</button>
            <button>Students</button>
            <button>Photographers</button>
            <button>Business</button>
            <button>Adobe Stock</button>
            <button>Special offers</button>
        </div> 
        <div className='additionalCardContent1'>
            <div className='additionalCard1 card11'>
              <h2>Adobe Photoshop, powered by Firefly.</h2>
              <p>Now with the Generative Fill and Genarative Expand, you can add, remove, or extend content in any image automatically</p>
              <a href='#'>Learn more</a>
              <img src={cardImage11} alt='Image'></img>
            </div>
            <div className='additionalCard1 card12'>
              <h2>Get it done with Acrobat.</h2>
              <p>Edit, share and E-sign PDFs --all in one place. Acrobat's got it</p>
              <a href='#'>Learn more</a>
              <img src={cardImage12} alt='Image'></img>
            </div>
            <div className='additionalCard1 card13'>
              <div className='head'>
                <h2>Fast and Free editing with adobe express.</h2>
              </div>
              <div className='subHead'>
                <h4>Simple Image editing</h4>
                <p><a href='#'>Remove Background</a></p>
                <p><a href='#'>Resize Images</a></p>
                <p><a href='#'>Crop Images</a></p>
                <p><a href='#'>Convert to SVG</a></p>
              </div>
              <div className='subHead'>
                <h4>Quick video editing</h4>
                <p><a href='#'>Trim videos</a></p>
                <p><a href='#'>Merge video</a></p>
                <p><a href='#'>Crop video</a></p>
                <p><a href='#'>Convert to GIF</a></p>
            </div>
             </div>
        </div> 
        <div className='additionalImageCards'>
            <div className='imageCard image-card1'>
              <img src={cardImage21} alt='Image'></img>
            </div>
            <div className='imageCard image-card2'>
              <h2>Adobe Illustrator, powered by Firefly.</h2>
              <p>Transform text prompts into editable vector graphics with Text to Vector Graphics</p>
              <a href='#'>Learn more</a>
              <img src={cardImage22} alt='Image'></img>
            </div>
        </div>
        <div className='additionalCardContent2'>
        <div className='additionalCard2 cardContent11'>
          <h2>Your imagination's new bast friend.</h2>
          <p>Use Genarative AI and simple text prompts to create the hight and equality output -- beautifull images, text effects and fresh color palettes</p>
          <img></img>
        </div>
        <div className='additionalCard2 cardContent12'>
          <h5>ADOBE GENSTUDIO: COMMING SOON.</h5>
          <h2>Accelerate Your marketing Content.</h2>
          <p>Plan, create, distibute, activaate and measure content</p>
          <a href='#'>Learn more</a>
          <img></img>
        </div>
        <div className='additionalCard2 cardContent13'>
          <h5>STUDENTS AND TEACHERS</h5>
          <h2>Save over 60% on Creative Cloud</h2>
          <p>Go from standard to standout with 20+ amazing apps</p>
          <img></img>
        </div>
    </div> 
    </div>
  )
}

export default AdditionalContent
