import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ads from './Components/Ads';
import AllMails from './Components/AllMails';
import DashBoard from './Components/DashBoard';
import DashHome from './Components/DashHome';
import DefaultUser from './Components/DefaultUser';
import IpInfo from './Components/IpInfo';
import Notice from './Components/Notice';
import Seenmails from './Components/Seenmails';
import Test from './Components/Test';
import Test1 from './Components/Test1';
import UnseenMails from './Components/UnseenMails';
import UserMail from './Components/UserMail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/notice" element={<Notice />} />
            <Route path="/adds" element={<Ads />} />
            <Route path="/main" element={<DashHome />} />
            <Route path="/defaultUser" element={<DefaultUser />} />
            <Route path="/test" element={<Test />} />
            <Route path="/mails" element={<UserMail />} />
            <Route path="/allmails" element={<AllMails />} />
            <Route path="/seenmails" element={<Seenmails />} />
            <Route path="/unseenmails" element={<UnseenMails />} />
          </Route>

            <Route path="/test1" element={<Test1 />} />
            <Route path="/ipinfo" element={<IpInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;