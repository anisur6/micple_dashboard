import React, { useEffect, useState } from 'react';
import { BiReset, BiSend } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import notice_table from './../styles/notice.module.css';
import loading from './loading.gif'



const Test = () => {

    const [data, setData] = useState([]);
    const [getStates, setGetStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [userId, setUserId] = useState([]);
    const [singleUserInfo, setSingleUserInfo] = useState([]);
    const [singleUserInput, setSingleUserInput] = useState([])






        //    << ------------- handle loading -------- >>

        const [isLoading, setIsLoading] = useState(false);

        const handleLoading = () => {
            setIsLoading(true);

            setTimeout(() => {
            setGetStates([])
            setCities([])
            setUserId([])
            setSingleUserInfo([])
            setSingleUserInput([])
            setIsLoading(false);
            }, 5000);
        };

        
        //    << ------------- handle loading -------- >>








    // <--------- onClick to select fielSet --------->

    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButton1, setSelectedButton1] = useState(null);
    const [selectedButton2, setSelectedButton2] = useState(null);
    const [selectedButton3, setSelectedButton3] = useState(null);
    const [selectedButton4, setSelectedButton4] = useState(null);



    const handleButtonClick = (id) => {
        setSelectedButton(id);
        setSelectedButton1(!id);
        setSelectedButton2(!id);
        setSelectedButton3(!id);
        setSelectedButton4(!id);
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

    const handleButtonClick4 = (id) => {
        setSelectedButton4(id);
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

    
    const handleUserInput = (items) => {
        let state = items.mail
        const SelectState = state.map((item) => item)
        setSingleUserInput(SelectState)
    }


 



    
    return (
        <>
            {isLoading && <div className={notice_table.reset_loader}><img style={{height: '200px', width: 'auto'}} src={loading} alt="gdfg" />
            <div></div>
            </div>}
           
            <div className={notice_table.inner} style={{paddingTop: '30px'}}>
                <table className={notice_table.table} style={{ width: '10%' }}>
                    <tr>
                        <th style={{ padding: '5px' }}>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                <p>Country</p>
                                <p><BiReset onClick={handleLoading} style={{cursor: 'pointer', backgroundColor: 'gray', borderRadius: '50%', padding: '2px', fontSize: '20px', color: "white"}} /></p>
                            </div>  </th> 
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

                <table className={notice_table.table} style={{ width: '8%' }}>
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

                <table className={notice_table.table} style={{ width: '8%' }}>
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

                <table className={notice_table.table} style={{ width: '7%' }}>
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

                <table className={notice_table.user_table} style={{ width: '55%' }}>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Massage Body</th>
                        <th>IP Info</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    {
                        singleUserInfo.map((items) => {
                            return (
                                <>
                                    <tr>
                                        <td  onClick={() => handleUserInput(items)}> <button onClick={() => handleButtonClick4(items)} style={{ backgroundColor : selectedButton4 === items ? "gray" : "white", color : selectedButton4 === items ? "white" : "" }}   className={notice_table.select_button} >{items.user_name}</button></td>
                                        <td >{items.mail_sub}</td>
                                        <td>{items.mail_body}</td>
                                        <td>{items.ip}</td>
                                        <td>{items.date} {items.time}</td>
                                        <td>Panding</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>


                <table className={notice_table.user_table} style={{width: '15%'}}>
                    <tr>
                        <th>Action</th>
                    </tr>
                    {
                        singleUserInput.map((items) => {
                            return (
                                <>
                                    <tr>
                                        <td>
                                            <div style={{height: '400px', width: '100%', backgroundColor: 'white'}}>
                                                <div style={{borderBottom: '1px solid lightgray', padding: '5px'}}> 
                                                <span style={{fontWeight: 'bold', fontSize: '12px', color: 'black'}}>{items.user_name} ({items.user_id})</span> 
                                                <br/> 
                                                <p style={{fontWeight: 'bold', paddingTop: '5px'}}>{items.mail_sub}</p> 
                                                </div>

                                                <div style={{textAlign: 'start', width: '80%' }}>
                                                    <p style={{backgroundColor: 'lightgray',fontSize: '12px',  borderRadius: '10px 10px 10px 0px', padding: '5px', margin: '5px 5px 2px 5px'}}>{items.mail_body}</p>
                                                    <p style={{fontSize: '9px', color: 'gray', marginLeft: '5px'}}>05/01/2022, 17:31</p>
                                                </div>

                                                <div style={{width: '80%', marginLeft: 'auto', textAlign: 'end'}}>
                                                    <p style={{backgroundColor: 'gray', fontSize: '12px', borderRadius: '10px 10px 0px 10px', padding: '5px', margin: '5px 5px 2px 5px', color: 'white'}}>{items.mail_body}</p>
                                                    <p style={{fontSize: '9px', color: 'gray', marginRight: '5px'}}>05/01/2022, 18:11</p>
                                                </div>
                                            </div>

                                            <hr style={{backgroundColor: 'lightgray'}} />


                                            <div style={{height: '400px', width: '100%', backgroundColor: 'white'}}>
                                                <p  style={{fontWeight: 'bold', color: 'gray', padding: '5px'}}>Send response</p>
                                                <textarea rows={14} className={notice_table.mail_input} type="text" placeholder="type replay" ></textarea>
                                                <button style={{margin: '5px', padding: '5px 15px'}}><BiSend styke={{fontSize: '25px'}} /></button>

                                            </div>
                                        </td>
                                    </tr>

                                    <Link state={items} to="/test1">Click hare </Link>

                                    
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