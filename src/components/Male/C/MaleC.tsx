import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MaleC.scss'

function MaleC() {
    const Players = useSelector(state => state.players)

    useEffect(() => {
        
      }, [Players]);

  return (
    <>
      <div className="male-c__container">
        <h1>Jugadores Masculino C</h1>
      </div>
    </>
  )
}

export default MaleC