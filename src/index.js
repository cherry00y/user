import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Record from './recode.js'
import Home from './home'
import Showdata from './showinfo'
import Detaildrug from './detaildrug'
import Detaildisease from './detaildisease'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/record' element={<Record/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/showdata' element={<Showdata/>}/>
      <Route path='/detaildrug/:id' element={<Detaildrug/>}/>
      <Route path='/detaildisease/:id' element={<Detaildisease/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
