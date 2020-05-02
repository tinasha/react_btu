import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/">All</Link></li>
            <li><Link to="/Countries">Countries</Link></li>
            <li><Link to="/Country">Country</Link></li>
            <li><Link to="/States">States</Link></li>
            <li><Link to="/John_Hop">John_Hop</Link></li>
            <li><Link to="/Historical">Historical</Link></li>
        </ul>
    );
}


export default NavBar;