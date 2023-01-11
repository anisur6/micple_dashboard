import React, { useEffect, useState } from 'react';
import notice_table from './../styles/notice.module.css';


const AllMails = () => {



    const [data, setData] = useState([]);
    const [getStates, setGetStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userId, setUserId] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([])


    
   
   useEffect(() => {
       fetch("user.json")
       .then(res => res.json())
       .then(country => setData(country))
    }, [])


    const country = [...new Set(data.map(item => item.country))]
    country.sort();
 
    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e);
        states = [...new Set(states.map(item => item.state))];
        states.sort();
        setGetStates(states);
    }


    const handleStates = (e) => {
        let cities = data.filter(city => city.state === e);
        cities = [...new Set(cities.map(item => item.city))];
        setCities(cities);
    }

    const handleCities = (e) => {
        let userid = data.filter(user => user.city === e);
        userid = [...new Set(userid.map(item => item.userId))];
        setUserId(userid);
    }

    const handleUserId = (e) => {
        let singleUser = data.filter(user => user.userId === e);
        console.log(singleUser.length);
        setSingleUserInfo(singleUser);
    }



    return (
        <>

        
                <div className={notice_table.inner}>
          
                    <table className={notice_table.table} style={{width: '5%'}}>
                        <tr>
                            <th style={{padding: '8px'}}>Country</th>
                        </tr>

                        <tr>
                        {
                            country.map((item) => {
                                return(
                                    <>
                                     <tr onClick={() => handleCountry(item)}>
                                        <button className={notice_table.select_button} key={item}>{item}</button>

                                     </tr>
                                    </>
                                )
                            })
                        }
                        </tr> 
                    </table>

                    <table className={notice_table.table} style={{width: '10%'}}>
                                <tr>
                                    <th style={{padding: '8px'}}>State</th>
                                </tr>

                                {
                                getStates.map((item) => {
                                    return(
                                        <>
                                        <tr>
                                        <td onClick={() => handleStates(item)}>
                                            <button className={notice_table.select_button} key={item} >{item}</button>
                                        </td>
                                        </tr> 
                                        </>
                                        )
                                    })
                                }
        
                    </table>


                    <table className={notice_table.table} style={{width: '10%'}}>
                                <tr>
                                    <th style={{padding: '8px'}}>City</th>
                                </tr>
                                {
                                cities.map((item) => {
                                    return(
                                        <>
                                        <tr>
                                        <td onClick={() => handleCities(item)}>
                                            <button className={notice_table.select_button} key={item} >{item}</button>
                                        </td>
                                        </tr> 
                                        </>
                                        )
                                    })
                                }  
                    </table>

                    <table className={notice_table.table} style={{width: '10%'}}>
                                <tr>
                                    <th style={{padding: '8px'}}>User_ID</th>
                                </tr>


                                {
                                userId.map((item) => {
                                    return(
                                        <>
                                        <tr>
                                        <td onClick={() => handleUserId(item)}>
                                            <button className={notice_table.select_button} key={item} >{item}</button>
                                        </td>
                                        </tr> 
                                        </>
                                        )
                                    })
                                }       
                    </table>


                    <table className={notice_table.user_table}>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Massage Body</th>
                            <th>IP Info</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                       {
                        singleUserInfo.map((items) => {
                            return(
                                <>
                                    <tr> 
                                        <td>{items.name}</td>
                                        <td >{items.mail.mail_sub}</td>
                                        <td>{items.mail.mail_msg}</td>
                                        <td>{items.ip}</td>
                                        <td>{items.date} {items.time}</td>
                                        <td>Panding</td>
                                        <td><div style={{display: 'flex'}}><input className={notice_table.mail_input}  type="text" placeholder="type replay" /><button className={notice_table.mail_btn} >Replay</button></div></td>
                                    </tr>
                                </>
                            )
                        })
                       }
                                    
                                   
                             
                    </table>
                </div>
        </>
    );
};

export default AllMails;