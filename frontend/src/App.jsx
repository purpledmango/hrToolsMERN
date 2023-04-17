import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllEmp from './components/AllEmp';
import Nav from './components/Nav';
import AddEmp from './components/AddEmp';
import Manage from './components/Manage';
import 'bulma/css/bulma.css';
import axios from 'axios';

export default function App() {
  const [emps, setEmps] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api')
    .then(res=> {
      setEmps(res.data)})
      .catch(err=>{console.log(err);})
    

  }, [])
  
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<AllEmp emps={emps} />} />
        <Route
          path="/add"
          element={<AddEmp />}
        />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Router>
  );
}
