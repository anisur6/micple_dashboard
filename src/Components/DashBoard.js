import React, { useState } from 'react';
import './../App.css'
import iptable  from './../styles/iptable.module.css';
import {NavLink, Route, Routes } from 'react-router-dom';
import {FiSettings } from 'react-icons/fi';
import {BsCircleFill } from 'react-icons/bs';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import DashHome from './DashHome';
import Notice from './Notice';
import Ads from './Ads';
import UserMail from './UserMail';
import DefaultUser from './DefaultUser';





const DashBoard = () => {
    const [isShown, setIsShown] = useState(true);
    const [showSetting, setShowSetting] = useState(false);

    const toggleBtn = event => {
       setIsShown(current => !current);
    }

    const handleSetting = () => {
        setShowSetting(!showSetting);
    }

    return (
        <>
        <div className='main_dash'>
            <div className={!isShown ? 'mv-sidebar' : 'side_bar'}>
                <div className='side_bar_inner'>
                    <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
                        <li className='sidebar_Links' ><NavLink to="/" className="bar_links" style={{textAlign: 'center'}}><p>Dashboard</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="notice" className='bar_links'><p>Notice</p> <p>(06)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="defaultUser" className='bar_links'><p>User</p> <p>(125)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="adds" className='bar_links'><p>Ads</p> <p>(12)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="mails" className='bar_links'><p>Mail</p> <p>(452)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="seenmails" className='bar_links'><p>Live Chat</p> <p>(100)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="notewweice" className='bar_links'><p>Repost</p> <p>(15)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="notsdfsdfice" className='bar_links'><p>Recycle</p> <p>(12)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="dfgd" className='bar_links'><p>Restriction</p> <p>(22)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="nodfgfdtice" className='bar_links'><p>Ads Rate</p> <p>(02)</p></NavLink></li>
                        <li className='sidebar_Links'><NavLink to="fdg" className='bar_links'><p>Management</p> <p>(34)</p></NavLink></li>
                    </ul>

                    <div className={!isShown ? 'hide_content' : 'ip_tracker'}>
                        <div className='admin_data'>
                            <p style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '55px'}}>AnisurDev <BsCircleFill className='Active_status'/></p>
                            <div>
                                <div class="Settings_dropdown">
                                    <span class="Settings_dropbtn" onClick={handleSetting}><FiSettings /></span>
                                        <div class={(showSetting ? 'Settings_dropdown-content' : 'settings_Close')}>
                                            <a href="#">Change Password</a>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className='role_data'>
                            <p>Manager <span>(Video Checker)</span></p>
                            <p style={{fontSize: '12px', fontWeight: 'normal', margin: '5px'}}>Live IP Detect</p>
                        </div>

                        <div className='ip_data_lists'>
                            <table className={iptable.table} >
                                    <tr style={{width: '50%'}}> 
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
                            </table>
 
                            <div style={{textAlign: 'right'}}>
                                <a href="/ipinfo" target="_blank"><button  className='ip_data-btn'>Downolad pdf</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='data_description'>             
                {!isShown ? 
                <>
                    <div className='toggle_btn' onClick={toggleBtn}><BiRightArrow className='toggoler' /></div>
                </> 
                :
                <>
                    <div className='toggle_btn' onClick={toggleBtn}><BiLeftArrow className='toggoler' /></div>
                </>
                }
                <Routes>
                    <Route path="/" element={<DashHome />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/adds" element={<Ads />} />
                    <Route path="/mails" element={<UserMail />} />
                    <Route path="/defaultUser" element={<DefaultUser />} />
                </Routes>
            </div>
        </div>
        </>
    );
};

export default DashBoard;