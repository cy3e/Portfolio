import React from'react';
import ReactDOM from'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import DeviceList from './pages/DeviceList';
import NewDevice from './pages/Newdevice';
import Tools from './pages/tools';
export default class App extends React.Component {
  render() {
    return (
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="list" element={<DeviceList/>} />
        <Route path="new" element={<NewDevice/>} />
        <Route path="tools"  element={<Tools/>} />
      </Routes>
      </div>
    );
  }
}
