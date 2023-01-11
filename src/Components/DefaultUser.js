import React from 'react';
import './../App.css';


const DefaultUser = () => {
    return (
        <div>
            <div className='data_header'>
                <div className='notice_inner'>
                    <div className='notice_items'>
                        <h1>User page data_body</h1>
                    </div>
                </div>
        </div>


        <div className='data_body'>
                <div style={{padding: '100px'}}>
                   <input style={{padding: '10px 20px', fontSize: '15px'}} type="text" placeholder='type name' /> 
                   <button style={{padding: '10px 20px', fontSize: '15px'}} >add</button>
                </div>
        </div>
        
        </div>
    );
};

export default DefaultUser;