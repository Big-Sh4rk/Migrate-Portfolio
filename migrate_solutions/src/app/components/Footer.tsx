import "../globals.css";
import React from 'react';
import Link from 'next/link'

interface FooterProps {
 title: string;
}

export const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className={`flex ${'footer'}`}>
      <div id="Redes"  className="flex flex-col">
        <h3 className=" ml-5 text-white">Our Social Media:</h3>
        <div className="flex flex-row items-center justify-center ml-5">
          <img src="icons\icono-X.png" alt="X" id="LogoX"  className="w-10 h-10 mt-3"/>
          <Link href={'https://www.linkedin.com/company/migrate-solutions/about/'}>
          <img src="icons\linkedin 2.png" alt="Linkedin" id="LogoLinkedin"  className="w-10 h-10 ml-2 mt-3"/>
          </Link>
        </div>
      </div>
      <div id='Contact' className={`flex flex-col  ${"ContactUs"}`}>
      <Link href="/Contact">
        <h3 className=" text-white">Contact Us:</h3>
        <img src="icons\icono-mensaje.png" alt="Mensaje"  id="LogoContacUs" className="ml-3 w-14 h-13 "/>
      </Link>
      </div>
    </div>
  );
}

export default Footer;