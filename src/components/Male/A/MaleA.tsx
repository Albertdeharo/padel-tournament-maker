import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deletePlayer } from '../../Players/playersSlice';
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import { TournamentHours } from '../../../utils/constants';
import './MaleA.scss'
import './../../Players/PlayersGroupTables.scss'

function MaleA() {
  const dispatch = useDispatch();
  const Players = useSelector(state => state.players)
  const [PlayersCategoryA, setPlayersCategoryA] = useState([]);
  const [PlayersGroupsCategoryA, setPlayersGroupsCategoryAGroup1] = useState([]);

  useEffect(() => {
    const FilterPlayersCategoryA = Players.filter(player => {
      return player.playerCategory === 'A' && player.playerGender === 'Male'
    })
    setPlayersCategoryA(FilterPlayersCategoryA)
    console.log(PlayersCategoryA, 'PlayersCategoryA')


    }, [Players]);

    const makeGroups = () => {
      // Función para barajar aleatoriamente un array de objetos
      function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      }
      // Array original con 16 objetos
      // PlayersCategoryA

      // Barajamos aleatoriamente el array de objetos
      const shuffledArray = shuffleArray(PlayersCategoryA);

      // Dividimos el array barajado en grupos de 4 objetos
      const groups = [];
      for (let i = 0; i < shuffledArray.length; i += 4) {
        const group = shuffledArray.slice(i, i + 4);
        groups.push(group);
      }

      // Seteamos los grupos resultantes
      console.log(groups);
      setPlayersGroupsCategoryAGroup1(groups)
    }

    const getSchedule = () => {
    }

    console.log(PlayersGroupsCategoryA[0], 'PlayersGroupsCategoryA');

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className="male-a__container">
        <h1>Jugadores Masculino A</h1>
        <h2> total jugadores {PlayersCategoryA.length}</h2>
        <button onClick={getSchedule}>Get Schedule</button>
        <button onClick={makeGroups}>Make groups</button>

        {PlayersGroupsCategoryA.length > 0 && (
          <table className="players-table-group">
            <thead>
              <tr>
                <th key={'firstName'}>Grupo 1</th>
                {PlayersGroupsCategoryA[0].map((playersMaleAgroup1, key) => (
                  <th key={key}>{playersMaleAgroup1.firstPlayerName+ ' '}
                  {playersMaleAgroup1.secondPlayerName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {PlayersGroupsCategoryA[0].map((playersMaleAgroup1, key) => (
                <tr key={key}>
                  <td key={key+'firstname'} className="">
                    {playersMaleAgroup1.firstPlayerName+ ' '}
                    {playersMaleAgroup1.secondPlayerName}
                  </td>
                  <td key={key+'partido1'} className="">
                    horario partido1
                  </td>
                  <td key={key+'partido2'} className="">
                    horario partido2
                  </td>
                  <td key={key+'partido3'} className="">
                    horario partido3
                  </td>
                  <td key={key+'partido4'} className="">
                    horario partido4
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        )}

        <br />
        <br />
        <br />
        <br />

        {PlayersGroupsCategoryA.length > 1 && (
          <table className="players-table-group">
            <thead>
              <tr>
                <th key={'firstName'}>Grupo 2</th>
                {PlayersGroupsCategoryA[1].map((playersMaleAgroup2, key) => (
                  <th key={key}>{playersMaleAgroup2.firstPlayerName+ ' '} 
                  {playersMaleAgroup2.secondPlayerName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {PlayersGroupsCategoryA[1].map((playersMaleAgroup2, key) => (
                <tr key={key}>
                  <td key={key+'firstname'} className="">
                    {playersMaleAgroup2.firstPlayerName+ ' '}
                    {playersMaleAgroup2.secondPlayerName}
                  </td>
                  <td key={key+'partido1'} className="">
                    horario partido1
                  </td>
                  <td key={key+'partido2'} className="">
                    horario partido2
                  </td>
                  <td key={key+'partido3'} className="">
                    horario partido3
                  </td>
                  <td key={key+'partido4'} className="">
                    horario partido4
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        )}

        <br />
        <br />
        <br />
        <br />

        {PlayersGroupsCategoryA.length > 2 && (
          <table className="players-table-group">
            <thead>
              <tr>
                <th key={'firstName'}>Grupo 3</th>
                {PlayersGroupsCategoryA[2].map((playersMaleAgroup3, key) => (
                  <th key={key}>{playersMaleAgroup3.firstPlayerName+ ' '}
                  {playersMaleAgroup3.secondPlayerName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {PlayersGroupsCategoryA[2].map((playersMaleAgroup3, key) => (
                <tr key={key}>
                  <td key={key+'firstname'} className="">
                    {playersMaleAgroup3.firstPlayerName+ ' '}
                    {playersMaleAgroup3.secondPlayerName}
                  </td>
                  <td key={key+'partido1'} className="">
                    horario partido1
                  </td>
                  <td key={key+'partido2'} className="">
                    horario partido2
                  </td>
                  <td key={key+'partido3'} className="">
                    horario partido3
                  </td>
                  <td key={key+'partido4'} className="">
                    horario partido4
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        )}

        <br />
        <br />
        <br />
        <br />

        {PlayersGroupsCategoryA.length > 3 && (
          <table className="players-table-group">
            <thead>
              <tr>
                <th key={'firstName'}>Grupo 4</th>
                {PlayersGroupsCategoryA[3].map((playersMaleAgroup4, key) => (
                  <th key={key}>{playersMaleAgroup4.firstPlayerName+ ' '}
                  {playersMaleAgroup4.secondPlayerName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {PlayersGroupsCategoryA[3].map((playersMaleAgroup4, key) => (
                <tr key={key}>
                  <td key={key+'firstname'} className="">
                    {playersMaleAgroup4.firstPlayerName+ ' '}
                    {playersMaleAgroup4.secondPlayerName}
                  </td>
                  <td key={key+'partido1'} className="">
                    horario partido1
                  </td>
                  <td key={key+'partido2'} className="">
                    horario partido2
                  </td>
                  <td key={key+'partido3'} className="">
                    horario partido3
                  </td>
                  <td key={key+'partido4'} className="">
                    horario partido4
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        )}


      </div>
    </>
  )
}

export default MaleA