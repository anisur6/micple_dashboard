import React from 'react';
import { useLocation } from 'react-router-dom';
import notice_table from './../styles/notice.module.css';



const Test1 = () => {

    const location = useLocation();
    const data = location.state;


    return (
        <>
                <table className={notice_table.user_table} style={{width: '50%', margin: 'auto'}}>
                            <tr style={{backgroundColor: 'lightgrey'}}>
                                <th>Action</th>
                            </tr>

                            <tr>
                                <td>
                                    <div style={{height: '400px', width: '100%', backgroundColor: 'white'}}>
                                        <div style={{borderBottom: '1px solid lightgray', padding: '5px'}}><p style={{padding: '3px', fontSize: '12px'}}>  <span style={{fontWeight: 'bold', color: 'black'}}>({data.user_name})</span> | <span style={{fontWeight: 'bold', color: 'gray'}}> Sub :</span> {data.mail_sub}</p></div>
                                        <div style={{padding: '5px'}}><p><span style={{fontWeight: 'bold', color: 'gray'}}>Massage :</span> {data.mail_body}</p></div>
                                    </div>

                                <hr style={{backgroundColor: 'lightgray'}} />

                                    <div style={{height: '400px', width: '100%', backgroundColor: 'white'}}>
                                        <p  style={{fontWeight: 'bold', color: 'gray', padding: '5px'}}>Send response</p>
                                        <textarea rows={14} className={notice_table.mail_input} type="text" placeholder="type replay" ></textarea>
                                        <button style={{margin: '5px 50px', padding: '5px 15px', display: 'block'}}>Send</button>
                                    </div>
                                </td>
                            </tr>

                            <button style={{marginTop: '10px', padding: '5px 10px'}} onClick={() => window.print()}>Download PDF</button>
                </table>

        </>
    );
};

export default Test1;