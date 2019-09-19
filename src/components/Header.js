import React from 'react';
import Sidebar from './Sidebar'
import NavIcons from './NavIcons';

const Header = () => {
  return (
    <div className="header">
        <nav className="navbar fixed-top cic-header d-flex justify-content-between">
            <div className="d-flex align-items-center;">
                <a className="navbar-brand" href="index.html"></a>
                <Sidebar />
            </div>
            <div className="page-title">
                <span>
                    <svg viewBox="0 0 24 24" className="App-logo">
                        <path d="M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z"/>
                    </svg>
                    Asset Management 
                    <a className="btn btn-primary btn-sm" href="/#"><span className="mdi mdi-plus"></span> 
                        Add
                    </a>
                </span>
            </div>
            <NavIcons />
        </nav>
    </div>
  );
}

export default Header;
