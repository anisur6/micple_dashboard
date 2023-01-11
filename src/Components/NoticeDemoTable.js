import React, { useState } from 'react';
import notice_table from './../styles/notice.module.css';



const NoticeDemoTable = () => {

    const [noticeBtn, setNoticeBtn] = useState(true);

    const handleClick = () => {
        setNoticeBtn(!noticeBtn)
      };

    return (
        <div className={notice_table.inner}>
            <table className={notice_table.table}>
                <tr>
                    <th style={{width: '3%'}}>Serial</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Notice</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>United kingdom</td>
                    <td>London</td>
                    <td>Bristo</td>
                    <td>30 Dec 2022 (03:23 PM)</td>
                    <td>having experience in developing monolithic and micro service based application</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button onClick={handleClick} className={( noticeBtn ? [notice_table.active] : '')}>ON</button>
                        <button onClick={handleClick} className={( noticeBtn ? '' : [notice_table.deactive])}>OFF</button>
                    </div></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>United State</td>
                    <td>Los Angles</td>
                    <td>Calefonia</td>
                    <td>12 jun 2023 (05:33 PM)</td>
                    <td>enthusiastic and passionate frontend Web Developer,</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button className={notice_table.active}>ON</button>
                        <button>OFF</button>
                    </div></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>United kingdom</td>
                    <td>London</td>
                    <td>Bristo</td>
                    <td>30 dec 2022 (03:23 PM)</td>
                    <td>having experience in developing monolithic and micro service based application</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button>ON</button>
                        <button className={notice_table.deactive}>OFF</button>
                    </div></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>United State</td>
                    <td>Los Angles</td>
                    <td>Calefonia</td>
                    <td>12 jun 2023 (05:33 PM)</td>
                    <td>enthusiastic and passionate frontend Web Developer,</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button>ON</button>
                        <button className={notice_table.deactive}>OFF</button>
                    </div></td>
          
                </tr>
                <tr>
                    <td>5</td>
                    <td>United kingdom</td>
                    <td>London</td>
                    <td>Bristo</td>
                    <td>30 dec 2022 (03:23 PM)</td>
                    <td>having experience in developing monolithic and micro service based application</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button>ON</button>
                        <button className={notice_table.deactive}>OFF</button>
                    </div></td>
    
                </tr>
                <tr>
                    <td>6</td>
                    <td>United State</td>
                    <td>Los Angles</td>
                    <td>Calefonia</td>
                    <td>12 jun 2023 (05:33 PM)</td>
                    <td>enthusiastic and passionate frontend Web Developer,</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button>ON</button>
                        <button className={notice_table.deactive}>OFF</button>
                    </div></td>

                </tr>
                <tr>
                    <td>7</td>
                    <td>United State</td>
                    <td>Los Angles</td>
                    <td>Calefonia</td>
                    <td>12 jun 2023 (05:33 PM)</td>
                    <td>enthusiastic and passionate frontend Web Developer,</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button className={notice_table.active}>ON</button>
                        <button >OFF</button>
                    </div></td>
           
                </tr>
                <tr>
                    <td>8</td>
                    <td>United kingdom</td>
                    <td>London</td>
                    <td>Bristo</td>
                    <td>30 dec 2022 (03:23 PM)</td>
                    <td>having experience in developing monolithic and micro service based application</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button>ON</button>
                        <button className={notice_table.deactive}>OFF</button>
                    </div></td>
               
                </tr>
                <tr>
                    <td>9</td>
                    <td>United State</td>
                    <td>Los Angles</td>
                    <td>Calefonia</td>
                    <td>12 jun 2023 (05:33 PM)</td>
                    <td>enthusiastic and passionate frontend Web Developer,</td>
                    <td>Schedule</td>
                    <td><div className={notice_table.toggle_btn_group}>
                        <button className={notice_table.active}>ON</button>
                        <button>OFF</button>
                    </div></td>

                </tr>
                </table>
        </div>
    );
};

export default NoticeDemoTable;