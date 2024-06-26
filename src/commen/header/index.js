import React, { useState } from 'react';
import './header.scss';
import { logo, close, menu } from '../../assets/images/png';
import '../../styles/mixin/_mixin.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='header'>
      <div className="container-hf">
        <div className="header-div">
          <div className="header-div-logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-div-ancer">
            <NavLink activeclassname='active' to={"/"}>Home</NavLink>
            <NavLink activeclassname='active' to={"/catcare"}>Cat Care</NavLink>
            <NavLink activeclassname='active' to={"/petguide"}>Pet Guide</NavLink>
            <NavLink activeclassname='active' to={"/contactus"}>Contact Us</NavLink>
          </div>
          <div className="header-div-menu">
            <img onClick={toggleSidebar} src={menu} alt="menu" />
          </div>
        </div>
      </div>
      <div className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-div-logo">
          <Link to={"/"} onClick={toggleSidebar}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar-div-ancer">
          <img className='sidebar-close' onClick={toggleSidebar} src={close} alt="close" />
          <NavLink activeclassname='active' to={"/"} onClick={toggleSidebar}>Home</NavLink>
          <NavLink activeclassname='active' to={"/catcare"} onClick={toggleSidebar}>Cat Care</NavLink>
          <NavLink activeclassname='active' to={"/petguide"} onClick={toggleSidebar}>Pet Guide</NavLink>
          <NavLink activeclassname='active' to={"/contactus"} onClick={toggleSidebar}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}
