import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePlayer } from './playersSlice';
import { Link } from 'react-router-dom'

import './Players.scss'


function PlayersList() {
    const dispatch = useDispatch();
    const Players = useSelector(state => state.players)

    const handleDelete = (id) => {
        dispatch(deletePlayer(id));
      };

  return (
    <div className="players_list-container">
      <h1 className="players_list-title">Jugadores {Players.length}</h1>
      <Link to="añadir-jugador">Añadir Jugador</Link>
      {Players.map((player) => (
        <div className="" key={player.id}>
              <h3 className="">{player.playerName}</h3>
              <h3 className="">{player.playerCategory}</h3>
              <p className="">{player.id}</p>
              <button onClick={() => handleDelete(player.id)}>DELETE</button>
              <Link to={`/editar-jugador/${player.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  )
}

export default PlayersList