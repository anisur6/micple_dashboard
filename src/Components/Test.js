import React, { useEffect, useState } from 'react';
import notice_table from './../styles/notice.module.css';




const Test = () => {

    const [data, setData] = useState([]);
    const [getStates, setGetStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userId, setUserId] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([]);








    // <--------- onClick to select fielSet --------->

    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);



    const handleButtonClick = (id) => {
        setSelectedButton(id);
        setSelectedButton1(!id);
        setSelectedButton2(!id);
        setSelectedButton3(!id);
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
        const selectCountry = country.map((item) => item)
        setGetStates(selectCountry)
    }

    const handleStates = (item) => {
        let state = item.city
        const SelectState = state.map((item) => item)
        setCities(SelectState)
    }

    
    const handleCities = (item) => {
        let state = item.user_mail
        const SelectState = state.map((item) => item)
        setUserId(SelectState)
    }

    
    const handleUserId = (item) => {
        let state = item.mails
        const SelectState = state.map((item) => item)
        setSingleUserInfo(SelectState)
    }


    const resetFunc = () => {
            setGetStates([])
            setCities([])
            setUserId([])
            setSingleUserInfo([])
    }




    return (
        <>

<div style={{padding: '30px'}}>
              <button style={{padding: '10px 20px', fontSize: '15px'}} onClick={() => resetFunc()}>reset button</button>
              </div>



            <div className={notice_table.inner}>
             
                

                <table className={notice_table.table} style={{ width: '15%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>Country</th>
                    </tr>

                    {data.map((item) => {
                            return (
                                <>
                                    <tr onClick={() => handleCountry(item)}>
                                        <button onClick={() => handleButtonClick(item.id)} style={{ backgroundColor: selectedButton === item.id ? "gray" : "white", color: selectedButton === item.id ? "white" : "" }} className={notice_table.select_button} >{item.country_name} ({item.total_Mail_count})</button>
                                    </tr>
                                </>
                            )
                        })}
                </table>

                <table className={notice_table.table} style={{ width: '15%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>State</th>
                    </tr>

                    {getStates.map((item) => {
                            return (
                                <>
                                    <tr><td onClick={() => handleStates(item)}><button onClick={() => handleButtonClick1(item)} style={{ backgroundColor: selectedButton1 === item ? "gray" : "white", color: selectedButton1 === item ? "white" : ""}} className={notice_table.select_button}> {item.State_name} ({item.state_user_count}) </button></td></tr>
                                </>
                            )
                    })}
                </table>


                <table className={notice_table.table} style={{ width: '12%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>City</th>
                    </tr>
                    {cities.map((item) => {
                            return(
                                <>
                                    <tr><td onClick={() => handleCities(item)}><button onClick={() => handleButtonClick2(item)} style={{ backgroundColor : selectedButton2 === item ? "gray" : "white", color : selectedButton2 === item ? "white" : "" }}  className={notice_table.select_button} >{item.city_name} ({item.city_user_count})</button></td></tr> 
                                </>
                                )
                        })}  
                </table>

                <table className={notice_table.table} style={{ width: '10%' }}>
                    <tr>
                        <th style={{ padding: '8px' }}>User_ID</th>
                    </tr>
                    {userId.map((item) => {
                            return(
                                <>
                                    <tr><td onClick={() => handleUserId(item)}><button onClick={() => handleButtonClick3(item)} style={{ backgroundColor : selectedButton3 === item ? "gray" : "white", color : selectedButton3 === item ? "white" : "" }}   className={notice_table.select_button} >{item.user_id}</button></td></tr> 
                                </>
                                )
                            })}   
                </table>


                <table className={notice_table.user_table}>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Massage Body</th>
                        <th>IP Info</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        singleUserInfo.map((items) => {
                            return (
                                <>
                                    <tr>
                                        <td>{items.user_name}</td>
                                        <td >{items.mail_sub}</td>
                                        <td>{items.mail_body}</td>
                                        <td>{items.ip}</td>
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