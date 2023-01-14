import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import notice_table from './../styles/notice.module.css';
import Test1 from './Test1';



const Test = () => {

    const [data, setData] = useState([]);
    const [getStates, setGetStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userId, setUserId] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([]);

    const [getcountry, setGetCountry] = useState();

console.log(getStates);




    // <--------- onClick to select fielSet --------->

    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);



    const handleButtonClick = (id) => {
        setSelectedButton(id);
    };

    const handleButtonClick1 = (id) => {
        setSelectedButton1(id);
    };

    const handleButtonClick2 = (id) => {
        setSelectedButton2(id);
    };

    const handleButtonClick3 = (id) => {
        setSelectedButton3(id);
    };



    // <--------- onClick to select fielSet --------->


    useEffect(() => {
        fetch("MailCountry.json")
            .then(res => res.json())
            .then(country => setData(country))
    }, [])



    const handleCountry = (item) => {
        let country = item.state;
        const state = country.map((item) => item)
        setGetStates(state)
    }



    return (
        <>
            <div className={notice_table.inner}>
              

                <table className={notice_table.table} style={{ width: '15%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>Country</th>
                    </tr>

                    {
                        data.map((item) => {
                            return (
                                <>
                                    <tr onClick={() => handleCountry(item)}>
                                        <button onClick={() => handleButtonClick(item.id)} 
                                            style={{ backgroundColor: selectedButton === item.id ? "gray" : "white", color: selectedButton === item.id ? "white" : "" }} className={notice_table.select_button} >{item.country_name} ({item.total_Mail_count})</button>
                                    </tr>
                                </>
                            )
                        })
                    }

                </table>

                <table className={notice_table.table} style={{ width: '12%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>State</th>
                    </tr>

                    {
                        getStates.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td >
                                            <button
                                                style={{
                                                    backgroundColor: selectedButton1 === item ? "gray" : "white",
                                                    color: selectedButton1 === item ? "white" : ""
                                                }}
                                                className={notice_table.select_button}>
                                                {item.State_name} {item.state_user_count}
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </table>


                <table className={notice_table.table} style={{ width: '12%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>City</th>
                    </tr>
                    {/* {
                                cities.map((item) => {
                                    return(
                                        <>
                                        <tr>
                                        <td onClick={() => handleCities(item)}>
                                            <button onClick={() => handleButtonClick2(item)} style={{ backgroundColor : selectedButton2 === item ? "gray" : "white", color : selectedButton2 === item ? "white" : "" }}  className={notice_table.select_button} >{item}</button>
                                        </td>
                                        </tr> 
                                        </>
                                        )
                                    })
                                }   */}
                </table>

                <table className={notice_table.table} style={{ width: '10%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>User_ID</th>
                    </tr>
                    {/* {
                                userId.map((item) => {
                                    return(
                                        <>
                                        <tr>
                                        <td onClick={() => handleUserId(item)}>
                                            
                                            <button onClick={() => handleButtonClick3(item)} style={{ backgroundColor : selectedButton3 === item ? "gray" : "white", color : selectedButton3 === item ? "white" : "" }}   className={notice_table.select_button} >{item}</button>
                                            
                                        </td>
                                        </tr> 
                                        </>
                                        )
                                    })
                                }    */}

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
                            return (
                                <>
                                    <tr>
                                        <td>{items.name}</td>
                                        <td >{items.mail.mail_sub}</td>
                                        <td>{items.mail.mail_msg}</td>
                                        <td>{items.ip}</td>
                                        <td>{items.date} {items.time}</td>
                                        <td>Panding</td>
                                        <td><div style={{ display: 'flex' }}><input className={notice_table.mail_input} type="text" placeholder="type replay" /><button className={notice_table.mail_btn} >Replay</button></div></td>
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
export default Test;