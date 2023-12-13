import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTournamentData } from './tournamentSlice';
import { useNavigate, useParams } from 'react-router-dom'
import './NewTournamentForm'

export default function newTournamentForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tournament, setTournament] = useState({
      tournamentName: '',
    });

    const handleChange = (e) => {
      setTournament({
          ...tournament,
          [e.target.name]: e.target.value,
        });
      };
        
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        setTournamentData({
          ...tournament
          })
        );
        navigate('/home');
    };

    return (
      <>
        <div className="players-form__container">
          <form onSubmit={handleSubmit}>
            <div className="row m-0 p-0">
              <div className="col-6">
                <label>Tournament Name:</label>
                <input type="text" name="tournamentName" placeholder="nombre" onChange={handleChange} />
              </div>
            </div>
            <button type="submit">save</button>
          </form>
        </div>
      </>
    );
  }