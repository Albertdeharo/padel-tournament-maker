import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import './FemaleC.scss'

function FemaleC() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className="male-c__container">
        <h1>Jugadores Femenino C</h1>
      </div>
    </>
  )
}

export default FemaleC