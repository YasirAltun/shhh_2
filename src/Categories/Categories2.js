import React from 'react';
import { Link } from 'react-router-dom';
import './Categories2.css'; // Stilleri dahil et

function Categories2() {
    return (
        <div className="categories">
            <ul className="category-list">
                <li className="category-item"><Link to="/python"><button id='#Python' className='btn1' >Python</button></Link></li>
                <li className="category-item"><Link to="/csharp"><button id='#C#' className='btn1'>C#</button> </Link></li>
                <li className="category-item"><Link to="/java"><button id='#Java' className='btn1'>Java</button></Link></li>
                <li className="category-item"><Link to="/cpp"><button id='#CPP' className='btn1'>C++</button></Link></li>
            </ul>
        </div>
    );
}

export default Categories2;