import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import './MixedB.scss'

function MixedB() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className="male-b__container">
        <h1>Jugadores Mixto B</h1>
      </div>
    </>
  )
}

export default MixedB