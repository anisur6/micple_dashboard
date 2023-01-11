import React from 'react';
import notice_table from './../styles/notice.module.css';



const Seenmails = () => {
    return (
        <>
            <div className={notice_table.inner}>
                    {/* <p style={{marginBottom: '10px'}}>Massage whice are already seen</p> */}
                    <table className={notice_table.table}>
                        <tr>
                            <th>Country</th>
                            <th>Name</th>
                            <th>User_ID</th>
                            <th>Massage Body</th>
                            <th>IP Info</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Bangladesh (10)</td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Rabbil Hasan</td>
                            <td>rabbi127</td>
                            <td>Anisurs post is causing problem while posting.</td>
                            <td>101.432.132</td>
                            <td>30 Dec 2022 (03:23 PM)</td>
                            <td>Not Answred</td>
                            <td>Replay</td>
                        </tr>
                       
                        </table>
                </div>
        </>
    );
};

export default Seenmails;