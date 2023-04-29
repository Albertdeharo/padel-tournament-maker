import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, editPlayer } from '../features/players/playersSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'

function PlayersForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const [player, setPlayer] = useState({
        playerName: "",
        playerCategory: "",
      });

    const Players = useSelector(state => state.players)

    
    const handleChange = (e) => {
        setPlayer({
          ...player,
          [e.target.name]: e.target.value,
        });
      };

        
    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            dispatch(editPlayer({ ...player, id: params.id }));
          } else {
            dispatch(
                addPlayer({
                ...player,
                id: uuid(),
              })
            );
          }
      
        navigate('/')
    };

    useEffect(() => {
        if (params.id) {
            setPlayer(Players.find((player) => player.id === params.id));
        }
      }, [params, Players]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="playerName" value={player.playerName} placeholder='nombre' onChange={handleChange} />
      <textarea name="playerCategory" value={player.playerCategory} id="" cols="30" rows="10" onChange={handleChange}></textarea>
      <button>save</button>
    </form>
  )
}

export default PlayersForm