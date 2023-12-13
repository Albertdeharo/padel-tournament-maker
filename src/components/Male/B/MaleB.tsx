import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MaleB.scss'

function MaleB() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
      <div className="male-b__container">
        <h1>Jugadores Masculino B</h1>
      </div>
  )
}

export default MaleB