import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, editPlayer } from './playersSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import * as constants from './../../utils/constants';

function PlayersForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const Players = useSelector(state => state.players)
    const [player, setPlayer] = useState({
        playerName: "",
        playerCategory: "",
        playerGender: "",
      });
    
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
      
        navigate('/home')
    };

    useEffect(() => {
        if (params.id) {
            setPlayer(Players.find((player) => player.id === params.id));
        }
      }, [params, Players]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="playerName" value={player.playerName} placeholder='nombre' onChange={handleChange} />
      <label>Select category:</label>
      <select
        name="playerCategory"
        id="playerCategorySelect"
        onChange={handleChange}
        defaultValue=""
        required
      >
        {player.playerCategory ? '':<option value="" disabled>Choose category</option>}
        {constants.allCategories.map((categoryOption, key) => (
          <option
            key={key}
            value={categoryOption}
            selected={player.playerCategory === categoryOption ? true:false}
          >
            {categoryOption}
          </option>
          ))}
      </select>

      <select
        name="playerGender"
        id="playerGenderSelect"
        onChange={handleChange}
        defaultValue=""
        required
      >
        {player.playerGender ? '':<option value="" disabled>Choose gender</option>}
        {constants.Gender.map((genderOption, key) => (
          <option
            key={key}
            value={genderOption}
            selected={player.playerGender === genderOption ? true:false}
          >
            {genderOption}
          </option>
          ))}
      </select>

      <br />
      <br />
      <button>save</button>
    </form>
  )
}

export default PlayersForm