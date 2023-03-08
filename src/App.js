import logo from './logo.svg';

import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Games from './Games';
import Chess from './Chess';
import VolleyBall from './VolleyBall';
import FootBall from './FootBall';
import TableTennis from './TableTennis';
import Rugby from './Rugby';

import Main from './Main';



function App() {

  var array = ["none", "none"]

  const [state, setstate] = useState(array);


  useEffect(() => {
    window.addEventListener('popstate', () => {

      if (window.location.pathname === "/Games") {
        var array1 = ["none", "none"]
        setstate(array1);
      }

      else if (window.location.pathname === "/Games/Chess" || window.location.pathname === "/Games/VolleyBall" || window.location.pathname === "/Games/FootBall") {
        var array1 = ["block", "none"]
        setstate(array1);
      }

      else if (window.location.pathname === "/Games/TableTennis" || window.location.pathname === "/Games/Rugby") {
        var array1 = ["none", "block"]
        setstate(array1);
      }




    })
  }, [])



  function myfun() {

    var array1 = ["none", "none"]
    setstate(array1);
  }


  return (
    <div>

      <header className="header">
        <NavLink className="styling" style={({ isActive }) => ({
          color: isActive ? 'skyblue' : 'blue'
        })} onClick={myfun} to="/">CODINGMARKET</NavLink>


      </header>

      <Routes>

        <Route path="/" element={<Games state={state} setstate={setstate} />}>
          <Route path="" element={<Main />}></Route>

          <Route path="Chess" element={<Chess />}></Route>
          <Route path="VolleyBall" element={<VolleyBall />}></Route>
          <Route path="FootBall" element={<FootBall />}></Route>
          <Route path="TableTennis" element={<TableTennis />}></Route>
          <Route path="Rugby" element={<Rugby />}></Route>

        </Route>


      </Routes>
      
     
    </div>
  );
}


export default App;
