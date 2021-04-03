
import './App.css';
import Home from './components/home/Home'
import Admin from './components/admin/adminHome'
import { Router, Switch } from "react-router-dom";
// import InRegs from './components/register/InRegs';
import Navbar from './components/home/Navbar';
// import Signin from './components/register/Signin';
import Main from './components/register/Main';
import View from './components/home/View';
import Noticeadd from './components/home/Noticeadd';
import HomeMain from './components/home/HomeMain';

function App() {
  return (
    <div className="App">

      {/* <Noticeadd /> */}
      {/* <Home /> */}
      <HomeMain />

    </div>
  );
}

export default App;
