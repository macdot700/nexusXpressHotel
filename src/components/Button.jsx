import React from "react";
import { Link } from "react-router-dom";

const url = 'https://wa.me/qr/ENYDU7YZMWXRF1'
const Button = ({text, onClick}) =>{
    return <button className="px-6 py-4 bg-book font-medium text-white shadow-xs" onClick={onClick}>{text}</button>
}

export default Button;