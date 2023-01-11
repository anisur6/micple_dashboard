import React, { useEffect, useState } from 'react';
import './../App.css';
import { RiCloseLine } from "react-icons/ri";





const NoticeModal = ({setIsOpen}) => {

    const [data, setData] = useState([]);
    const [getcountry, setGetCountry] = useState();
    const [getStates, setGetStates] = useState([]);
    const [selectState, setSelectState] = useState();
    const [cities, setCities] = useState([]);


  



    useEffect(() => {
        fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])

    const country = [...new Set(data.map(item => item.country))]
    country.sort();


    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e.target.value);
        states = [...new Set(states.map(item => item.subcountry))];
        states.sort();
        setGetStates(states);
    }
    
    
    const handleStates = (e) => {
        let cities = data.filter(city => city.subcountry === e.target.value);
        setCities(cities);
    }

    return (
        <>
        <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered w3-animate-opacity'>
            <div className='modal'>
            <div className='modalHeader'>
                <h5 className='heading'>Add Notice</h5>
            </div>

            <button className='closeBtn' onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>

            <div className='modalContent'>
                    <div className='ip_data_list'>
                        <div>
                        <select className='notice_select' onChange={(e) => handleCountry(e)}>
                            <option  style={{fontSize: '15px'}}> Select Country</option>
                            {country.map(items => <option style={{fontSize: '15px'}}  key={items} value={getcountry}><p>{items}</p></option> )}
                        </select>
                        </div>

                        <div>
                            <select className='notice_select' style={{width: '200px'}} onChange={(e) => handleStates(e)}>
                                <option  style={{fontSize: '15px'}}>Select District</option>
                                {getStates.map(items => <option style={{fontSize: '15px'}} key={items} value={selectState}><p>{items}</p></option> )}
                            </select>
                        </div>

                        <div>
                            <select className='notice_select'  style={{width: '200px'}}>
                                <option  style={{fontSize: '15px'}}>Select City</option>
                                {cities.map(items => <option style={{fontSize: '15px'}} key={items.name} ><p>{items.name}</p></option>)}
                              
                            </select>
                        </div>
                    </div>


                <div className='ip_data_list'>
                    <div><textarea style={{padding: '10px', border: '1px solid gray', borderRadius: '5px'}} id="w3review" name="w3review" placeholder='Add Notice' rows="3" cols="38"></textarea></div>
                 
                        <div style={{marginTop: '18px'}}><p>Select Date</p><input type="date" placeholder="MM/DD/YYYY" className='notice_select' style={{width: '200px', textTransform: 'uppercase'}} /> </div>
                        <div style={{marginTop: '18px'}}><p>Select Time</p><input type="time" placeholder='Enter City'  className='notice_select' style={{width: '200px'}} /> </div>
                
                </div>

            </div>

            <div className='modalActions'>
                <div className='actionsContainer'>
                    <button className='cancelBtn' onClick={() => setIsOpen(false)}>Cancel</button>
                    <button className='PublishBtn' onClick={() => setIsOpen(false)}> Publish</button>
                </div>
            </div>
          
        </div>
        </div>
        </>
    );
};

export default NoticeModal;



