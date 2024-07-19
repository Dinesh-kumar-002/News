import React, { useState } from 'react'
import './Header.css';
function Header() {

  const [searchValue,setSearchValue]=useState("");
  const handleChange=(val)=>{
    setSearchValue(val);
    console.log(searchValue);
  }
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold">Hot News</a>
            <div className="user">
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
        
        </nav>
        <div className="search">
          <div className="d-flex search-form">
              <input className="form-control" type="text" placeholder="Search Here..." aria-label="Search" value={searchValue} onChange={(e)=>{handleChange(e.target.value)}}/>
              <button className="btn bg-success text-white" type="submit">Search</button>
          </div>
        </div>
        
        
    </div>
  )
}

export default Header