import React  from 'react'
import "./Header.css"


function Header({onTextChange}) {
 
    

    return (
        <div className="header">
            <div className="AppName"><img src="/logo.svg" className="logo" alt="logo"/>Recepie Finder</div>
            <div className="search">
                <img src="/searchicon.svg" className="icon" alt="search-icon"/>
                <input className="searchinput"placeholder="Search Recpie" onChange={onTextChange}/>
             
            </div>
         
        </div>
    )
}

export default Header
