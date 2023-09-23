import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import './MixedC.scss'

function MixedC() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-c__container">
        <h1>Jugadores Mixto C</h1>
      </div>
    </>
  )
}

export default MixedC