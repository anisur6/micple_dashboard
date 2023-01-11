import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const IpInfo = () => {

    return (
        <div className='ip_tracker'>
        <div className='admin_data'>
            <p>anisurdev <BsCircleFill className='Active_status'/></p>
            <span><FiSettings /></span>
        </div>
        <div className='role_data'>
         <p style={{fontSize: '25px', fontWeight: 'bold'}}>Manager(Video Checker)</p>
         <p>Live Ip Detect</p>
        </div>

        <div className='' style={{textAlign: 'center'}}>
        <table className='ip_data'>
                <tr>
                    <th>Time</th>
                    <th>IP</th>
                    <th>Action</th>
                    <th>History</th>
                </tr>
                <tr>
                    <td>30 dec 2022 03:23 PM</td>
                    <td>101.434.323 (Bangladesh)</td>
                    <td>Active</td>
                    <td>Windows 10 , win64:64x , crome/105.0.0.0</td>
                </tr>
                <tr>
                    <td>30 dec 2022 03:23 PM</td>
                    <td>101.434.323 (Bangladesh)</td>
                    <td>Active</td>
                    <td>Windows 10 , win64:64x , crome/105.0.0.0</td>
                </tr>
                <tr>
                    <td>30 dec 2022 03:23 PM</td>
                    <td>101.434.323 (Bangladesh)</td>
                    <td>Active</td>
                    <td>Windows 10 , win64:64x , crome/105.0.0.0</td>
                </tr>
                <tr>
                    <td>30 dec 2022 03:23 PM</td>
                    <td>101.434.323 (Bangladesh)</td>
                    <td>Active</td>
                    <td>Windows 10 , win64:64x , crome/105.0.0.0</td>
                </tr>
                
               
               
                </table>
        <button className="ip_data-btn" onClick={() => window.print()}>Download PDF</button>
        <Link to="/"><button className="ip_data-btn" style={{marginLeft: '5px'}}>Go Back</button></Link>
              
        </div>
    </div>
    );
};

export default IpInfo;