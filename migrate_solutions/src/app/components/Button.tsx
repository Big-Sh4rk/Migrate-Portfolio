import "../globals.css";
import React from 'react';

interface ButtonProps{
    title:string;
}

export const Button: React.FC<ButtonProps> = ( {title} ) => {
    return (
        <button className="header-button">{title}</button>
    )
}