import React from "react";
import './style.css';
import Img from './icon.png';

function Navbar() {
  const navbarStyle = {
    backgroundColor: 'black',
  };

  return (
    <nav className="navbar navbar-dark" style={navbarStyle}>
      <div>
        <img src={Img} alt="" width="30" height="30" id="three" className="d-inline-block" />
        <span className="R1"> |STORIES</span>
      </div>
      <form className="form-inline">
        <button className="btn btn-warning my-2 my-sm-0" type="submit"><b>Courses</b></button>
      </form>
    </nav>
  );
}

export default Navbar;
