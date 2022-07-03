import React from 'react'
import logo from '../../assets/logo.png' 
import { Link } from "react-router-dom";

export default function LogoContainer() {
  return (
    <Link to="/" className='navbar-brand'>
        <img src={logo} alt="images" />
    </Link>
  )
}
