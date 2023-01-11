import React, { useState } from 'react';
import './../App.css';
import AllMails from './AllMails';
import Seenmails from './Seenmails';
import UnseenMails from './UnseenMails';

const UserMail = () => {


    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
        <div>
           
            

            <div className='data_body'>
                <div className='mails_tab'>
                    <div className="tabs">
                        <button className={`tab ${checkActive(1, "active")}`} onClick={() => handleClick(1)} > Not Answred (06) </button>
                        <button className={`tab ${checkActive(2, "active")}`} onClick={() => handleClick(2)} > Answred (02) </button>
                        <button className={`tab ${checkActive(3, "active")}`} onClick={() => handleClick(3)} > All (12) </button>
                    </div> 
                </div>


                
    

                <div className="panels">
                    <div className={`panel ${checkActive(1, "active")}`}>
                    <AllMails />
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                    <Seenmails />
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                    <UnseenMails />
                    </div>
                </div>

               
              
            </div>
        </div>
    );
};

export default UserMail;