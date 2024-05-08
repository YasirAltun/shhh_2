import React, { Component } from 'react'
import './Navi.css'


export default class Navi extends Component {

  render() {
    return (
      <div class=".ttl2" id="navbar">
        <a href="/">Home</a>
        <a href="/news">News</a>
        <a href="/contact">Contact</a>
        <a href='/login' class="split">Login</a>
      </div>
    );
  }
}
