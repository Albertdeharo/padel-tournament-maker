import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
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