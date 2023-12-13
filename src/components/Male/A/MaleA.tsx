import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deletePlayer } from '../../Players/playersSlice';
import { Link } from 'react-router-dom'
import { TournamentHours } from '../../../utils/constants';
import './MaleA.scss'
import './../../Players/PlayersGroupTables.scss'

function MaleA() {
  const dispatch = useDispatch();
  const Players = useSelector(state => state.players)
  const [PlayersCategoryA, setPlayersCategoryA] = useState([]);
  const [PlayersGroupsCategoryA, setPlayersGroupsCategoryA] = useState([]);
  console.log(PlayersCategoryA ,'PlayersGroupsCategoryA')
  console.log(Players ,'Players')
  useEffect(() => {
    const FilterPlayersCategoryA = Players.filter(player => {
      return player.playerCategory === 'A' && player.playerGender === 'Male'
    })
    setPlayersCategoryA(FilterPlayersCategoryA)
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
      setPlayersGroupsCategoryA(groups)
    }


    const [PlayersGroupsCategoryASchedule, setPlayersGroupsCategoryASchedule] = useState([TournamentHours]);
    const [scheduleRandom, setScheduleRandom] = useState([]);

    const getSchedule = () => {
/*       // Genera un índice aleatorio dentro del rango válido
      const randomIndex = Math.floor(Math.random() * PlayersGroupsCategoryASchedule[0].length);
      
      // Elimina y obtiene el valor aleatorio del array
      const removedValue = PlayersGroupsCategoryASchedule[0].splice(randomIndex, 1)[0];
      setPlayersGroupsCategoryASchedule(PlayersGroupsCategoryASchedule)
      console.log('Valor aleatorio eliminado:', removedValue);
      console.log('Array resultante:', PlayersGroupsCategoryASchedule);
      return setScheduleRandom(removedValue) */

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
            const shuffledArray = shuffleArray(PlayersGroupsCategoryASchedule[0]);
      
            // Dividimos el array barajado en grupos de 4 objetos
            const groups = [];
            for (let i = 0; i < shuffledArray.length; i += 4) {
              const group = shuffledArray.slice(i, i + 4);
              groups.push(group);
            }
      
            // Seteamos los grupos resultantes
            console.log(groups);
            setScheduleRandom(groups)
            console.log(scheduleRandom, 'scheduleRandom')

    }


  return (
    <>
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

{/*                   {scheduleRandom[0].map((playersMaleAgroup1scheduleRandom, key) => (
                    <td key={key+'partido2'} className="">
                      {playersMaleAgroup1scheduleRandom}
                    </td>
                  ))} */}

                  <td key={key+'partido1'} className="">
                    {scheduleRandom[0][0]}
                  </td>
                  <td key={key+'partido2'} className="">
                    {scheduleRandom[0][1]}
                  </td>
                  <td key={key+'partido3'} className="">
                    {scheduleRandom[0][2]}
                  </td>
                  <td key={key+'partido4'} className="">
                    {scheduleRandom[0][3]}
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