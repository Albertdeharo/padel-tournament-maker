import React from 'react'
import Layout from '../Layout/Layout';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourt } from './courtsSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import * as constants from '../../utils/constants';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './CourtsForm.scss'

function CourtsForm() {
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

    const handleSubmit = (e) => {
      console.log(e)
    };
    
    useEffect(() => {
      if (params.id) {
        setPlayer(Players.find((player) => player.id === params.id));
      }
    }, [params, Players]);

  return (
      <div className="court-form__container">
        <form onSubmit={handleSubmit}>
          <h1>courts</h1>
          <div className="row m-0 p-0">
            <div className="col-6">
              <label>Court Name22:</label>
              <input type="text" name="courtName" value="" placeholder='Nombre de la pista' />
            </div>
          </div>
          <button>save</button>
        </form>
      </div>
  );
}

export default CourtsForm