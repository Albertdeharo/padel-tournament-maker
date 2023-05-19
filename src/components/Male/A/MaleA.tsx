import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import './MaleA.scss'

function MaleA() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className="male-a__container">
        <h1>Jugadores Masculino A</h1>
      </div>
    </>
  )
}

export default MaleA