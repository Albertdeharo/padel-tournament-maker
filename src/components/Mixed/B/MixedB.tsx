import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MixedB.scss'

function MixedB() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-b__container">
        <h1>Jugadores Mixto B</h1>
      </div>
    </>
  )
}

export default MixedB