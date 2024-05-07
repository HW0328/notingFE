import React, { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./components/home";
import New from "./components/new";
import Lunch from "./components/lunch";
import Login from "./components/login";
import SignUp from "./components/signUp";


const App = () => {
  const be = "https://port-0-notingbe-1h3rc2alsfrkt4x.sel5.cloudtype.app/";
<<<<<<< HEAD

=======
>>>>>>> origin/master
  const [page, changePage] = useState(null);
  
  
  
  const [user, SetUser] = useState('');
  const [isLogined, SetIsLogined] = useState(0);

  useEffect(() => {
      const login_data = JSON.parse(localStorage.getItem('login_data'));
      if (login_data !== null){
      const id = login_data.id;
      const pw = login_data.pw;
      axios.post(be + '/log_in/', {
        id : id,
        pw : pw
      })
      .then(response => {
              console.log(response.data);
              SetUser(id);
              SetIsLogined(1);
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
        }
  }, [be]);

  const logout = () => {
    const check = window.confirm('Are you sure you want to log out?')
    
    if (check) {
      localStorage.removeItem('login_data');
      window.location.href = '/';
    }
  }
  useEffect(() => {
    changePage(<Home be={be} cp={changePage} user={user}/>);
  }, [be]);
  return (
    <div id="app">
      <nav>
        <span onClick={() => { changePage(<Home be={be} cp={changePage} user={user}/>) }}>Home</span>
        {isLogined === 0 ? (<div></div>) : (<span onClick={() => { changePage(<New be={be} cp={changePage} user={user} />) }}>New</span>)}
        <span onClick={() => { changePage(<Lunch be={be} cp={changePage} user={user} />) }}>Lunch</span>
        <span>about</span>
        {isLogined === 0 ? (
          <div className="login">
            <span className='login' onClick={() => { changePage(<SignUp be={be} cp={changePage} />) }}>Sign up</span>&nbsp;&nbsp;&nbsp;
            <span className='login' onClick={() => { changePage(<Login be={be} cp={changePage} />) }}> Sign in</span>
          </div>
      ) : (
        <div className="login">
          <span id="username" className="login">{user}</span>&nbsp;&nbsp;&nbsp;
          <span className="login" onClick={()=>{logout()}}> Sign out</span>
        </div>
      )}      </nav>
      <div id="mainapp">
        {page}
      </div>
    </div>
  )
}

export default App;
