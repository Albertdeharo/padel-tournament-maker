import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePlayer } from '../features/players/playersSlice';
import { Link } from 'react-router-dom'


function PlayersList() {
    const dispatch = useDispatch();
    const Players = useSelector(state => state.players)
    console.log(Players)

    const handleDelete = (id) => {
        console.log(id)
        dispatch(deletePlayer(id));
      };

  return (
    <div className="grid grid-cols-3 gap-3">
        <h1>Jugadores {Players.length}</h1>
        <Link to="añadir-jugador">Añadir Jugador</Link>
    {Players.map((player) => (
      <div className="bg-neutral-800 p-4 rounded-md" key={player.id}>
            <h3 className="text-lg font-bold">{player.playerName}</h3>
            <h3 className="text-lg font-bold">{player.playerCategory}</h3>
            <p className="text-xs text-slate-400">{player.id}</p>
            <button onClick={() => handleDelete(player.id)}>DELETE</button>
            <Link to={`/editar-jugador/${player.id}`}>Editar</Link>
      </div>
    ))}
  </div>
    
  )
}

export default PlayersList