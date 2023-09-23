import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import store from './../../app/store'
import './Navbar.scss'


function Navbar() {
    const Players = useSelector(state => state.players)

  return (
    <>
    <div className="custom-nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
            <div className="nav-title">
                <Link to="/home">Padel Tournament maker</Link>
            </div>
        </div>
        <div className="nav-btn">
            <label>
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        <div className="nav-links">
            {/* <Link to="/home">Inicio</Link> */}
            <Link to='/añadir-pistas'>
                Añadir Pistas
            </Link>
            <Link to='/añadir-jugador'>
                Añadir Pareja
            </Link>
            <Link to="/jugadores">
                Total Jugadores {Players.length*2}
            </Link>
        </div>
    </div>
    </>
  );
}

export default Navbar;