import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, editPlayer } from './playersSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import * as constants from './../../utils/constants';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './PlayersForm.scss'

function PlayersForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const Players = useSelector(state => state.players)
    const [player, setPlayer] = useState({
        firstPlayerName: "",
        secondPlayerName: "",
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
    <>
      <Navbar/>
      <Sidebar/>
      <div className="players-form__container">
        <form onSubmit={handleSubmit}>
          <div className="row m-0 p-0">
            <div className="col-6">
              <label>First Player Name:</label>
              <input type="text" name="firstPlayerName" value={player.firstPlayerName} placeholder='nombre' onChange={handleChange} />
            </div>
            <div className="col-6">
              <label>Second Player Name:</label>
              <input type="text" name="secondPlayerName" value={player.secondPlayerName} placeholder='nombre' onChange={handleChange} />
            </div>
          </div>
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
          <label>Select gender:</label>
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
      </div>

    </>
  )
}

export default PlayersForm