import React, { Component } from 'react'

import './Categories.css'



export default class Categories extends Component {

  
  render() {
    return (
      
      <div >
        <h3 className="ttl3" >Category List</h3>
        

        <div >
         <ul ><button id='#Python' className='btn1' >Python</button> </ul> 
        </div>

        <div >
         <ul><button id='#CPP' className='btn1'>C++</button> </ul> 
        </div>

        <div >
         <ul><button id='#C#' className='btn1'>C#</button> </ul> 
        </div>

        <div >
         <ul><button id='#Assembly' className='btn1' >Assembly</button> </ul> 
        </div>

        <div >
         <ul><button id='#Java' className='btn1'>Java</button> </ul> 
        </div>
        

      </div>
    )
  }
}
