import React, { Component } from 'react'
import './Navi.css'
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';


export default class Navi extends Component {

  render() {
    return (
      <div  id="navbar">
        <a href="/">Anasayfa</a>
        <a href="/news">Blog</a>
        <a href="/contact">İletişim</a>
        <a href='/login' class="split">Oturum Aç</a>

        
      </div>
    );
  }
}
