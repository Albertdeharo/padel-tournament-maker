import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './FemaleC.scss'

function FemaleC() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-c__container">
        <h1>Jugadores Femenino C</h1>
      </div>
    </>
  )
}

export default FemaleC