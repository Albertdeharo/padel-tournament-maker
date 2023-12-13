import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MixedA.scss'

function MixedA() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-a__container">
        <h1>Jugadores Mixto A</h1>
      </div>
    </>
  )
}

export default MixedA