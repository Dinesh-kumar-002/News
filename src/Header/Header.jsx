import React, { useState } from 'react'
import './Header.css';
function Header({fetchNews}) {

  const [searchValue,setSearchValue]=useState("");
  const handleChange=(val)=>{
    setSearchValue(val);
    console.log(searchValue);
  }

  const clickEvent = ()=>{
    if(!searchValue || searchValue=="" || searchValue==" "){
      return null;
    }
    else{
      fetchNews(searchValue);
    }
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
              <button className="btn bg-success text-white" type="submit" onClick={clickEvent}>Search</button>
          </div>
        </div>
        <select class="form-select form-select-lg" aria-label="Large select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        
        
    </div>
  )
}

export default Header