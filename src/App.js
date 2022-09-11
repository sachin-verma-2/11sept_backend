
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import SignupPage from './Pages/SignupPage';
import Userdashboard from './Pages/Userdashboard';
import Application from './Pages/Userdashboard/application';
import Profile from './Pages/Userdashboard/Profile';
import Admin from '../src/Pages/Admin/Admin'
import Home from '../src/Pages/Admin/Navbar/Home'
import AddJobs from '../src/Pages/Admin/Navbar/AddJobs'
import Employees from '../src/Pages/Admin/Navbar/Employee'
import MyJobs from '../src/Pages/Admin/Navbar/MyJobs'
import Profileadmin from './Pages/Admin/Navbar/Profileadmin'
import AdminNav from './Pages/Admin/Navbar/AdminNav';
import ViewJobPosted from '../src/Pages/Admin/Navbar/MyJobs';
import Wishlist from '../src/Pages/Userdashboard/wishlist'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/userdashboard" element={<Userdashboard></Userdashboard>}></Route> 
        <Route path='/application' element={<Application></Application>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route> 
        <Route path='/admindashboard' element={<Home />} />
        <Route path='/addjobs' element={<AddJobs />} />
        <Route path='/applicants' element={<Employees />} />
        <Route path='/myjobs' element={<ViewJobPosted></ViewJobPosted>} />
        <Route path='/profileadmin' element={<Profileadmin />} />
        <Route path='/wishlist' element={<Wishlist />} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
