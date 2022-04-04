import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="header">
           <div className="left-container ">
               <h1 >Your Next Laptop</h1>
               <div className="detail">
               <p>Performance and battery life was great, no fan noise, and it ran almost every app I needed. But the MacBook Air does all that and more, in a lighter and less costly package. Better performance. Two times the memory and 4x the storage.</p>
               <div className="button">
               <button>Live Demo</button>
               </div>
               </div>
           </div>
           <div className="right-container">
             
               <img src="https://png.pngitem.com/pimgs/s/617-6173738_apple-macbook-air-13-128gb-silver-mvfk2t-hd.png" alt="" />
           </div>
        </div>

        

    );
};

export default Home;