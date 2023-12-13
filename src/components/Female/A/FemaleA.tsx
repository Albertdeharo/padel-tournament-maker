import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './FemaleA.scss'

function FemaleA() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-a__container">
        <h1>Jugadores Femenino A</h1>
      </div>
    </>
  )
}

export default FemaleA