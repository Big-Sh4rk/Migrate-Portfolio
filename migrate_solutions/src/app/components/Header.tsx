import "../globals.css";
import React from 'react';


interface HeaderProps {
 button1: string;
 button2: string;
}

export const Header: React.FC<HeaderProps> = ({ button1, button2 }) => {
  return (
    <div className="header">
      <div className="logo">
      <img src="images\Logo Completo.png" alt="Logo"  />
      </div>
      <div className="button-container">
        <button className="header-button">{button1}</button>
        <button className="header-button">{button2}</button>

      </div>
    </div>
  );
}

export default Header;