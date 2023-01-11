import React, { useState } from 'react';
import './../App.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import NoticeDemoTable from './NoticeDemoTable';
import NoticeModal from './NoticeModal';

const Notice = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
        <div className='data_body'>
                <div className='notice_navigation'>
                    <button onClick={() => setIsOpen(true)} className="notice_header_btn"><AiOutlinePlusCircle /><p>Add Notice</p></button>
                     {isOpen && <NoticeModal setIsOpen={setIsOpen} />} 
                </div>

                <div className="panels">
                    <div>
                        <NoticeDemoTable/>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Notice;