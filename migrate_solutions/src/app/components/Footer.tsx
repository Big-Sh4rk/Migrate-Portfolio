import "../globals.css";
import React from 'react';

interface HeaderProps {
 title: string;
}

export const Footer: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={`flex ${'footer'}`}>
      <div className="logoFooter">
        <img src="images\Logo solo.png" alt="LogoSolo"  className="w-12 h-12"/>
        <h3 className="ml-5">Sofware Secure. People Secure</h3>
      </div>
      <div className=" flex ml-40 p-5  w-auto ">
        <ul className="flex items-center justify-between space-x-10">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;