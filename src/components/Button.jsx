import React from "react";
import { Link } from "react-router-dom";

const url = 'https://wa.me/qr/ENYDU7YZMWXRF1'
const Button = ({text}) =>{
    return <button className="px-6 py-4 bg-book font-medium text-white shadow-xs" onClick={() => window.open(url, '_blank')}>{text}</button>
}

export default Button;