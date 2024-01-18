import "../globals.css";
import React from 'react';
import { Button } from "./Button";
import Link from 'next/link'


interface HeaderProps {
 button1: string;
 button2: string;
 button3: string;

}

export const Header: React.FC<HeaderProps> = ({ button1, button2, button3 }) => {
  return (
    <div className="header">
      <div className="logo">
      <img src="images\iconoMigrate.png" alt="Logo" className="w-40 h-17" />
      </div>
      <div className="button-container">
        <Link href="/" className="header-button">Home</Link>
        <Link href="/Services" className="header-button">Services</Link>
        <Link href="/AboutUs" className="header-button">About Us</Link>

        <img src="icons\world 1.png" alt="world"  className="w-12 h-12"/>
      </div>
    </div>
  );
}

export default Header;