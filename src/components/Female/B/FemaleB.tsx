import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './FemaleB.scss'

function FemaleB() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-b__container">
        <h1>Jugadores Femenino B</h1>
      </div>
    </>
  )
}

export default FemaleB