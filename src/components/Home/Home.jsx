import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux'
import "./Home.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Home() {
  const Players = useSelector(state => state.players)
  const [PlayersCategoryA, setPlayersCategoryA] = useState([]);
  const [PlayersCategoryB, setPlayersCategoryB] = useState([]);
  const [PlayersCategoryC, setPlayersCategoryC] = useState([]);
  const [PlayersGenderMale, setPlayersGenderMale] = useState([]);
  const [PlayersGenderFemale, setPlayersGenderFemale] = useState([]);

  const allCategoriesPlayers = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        label: 'Number of Players',
        data: [PlayersCategoryA.length, PlayersCategoryB.length, PlayersCategoryC.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const allGenderPlayersOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gender Players',
      },
    },
  };

  const allGenderPlayers = {
    labels: ['Genders'],
    datasets: [
        {
        label: ['Female'],
        data: [PlayersGenderFemale.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1
      },
      {
        label: ['Male'],
        data: [PlayersGenderMale.length],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }
    ]
  };

  useEffect(() => {
    const FilterPlayersCategoryA = Players.filter(player => {
      return player.playerCategory === 'A'
    })
    const FilterPlayersCategoryB = Players.filter(player => {
      return player.playerCategory === 'B'
    })
    const FilterPlayersCategoryC = Players.filter(player => {
      return player.playerCategory === 'C'
    })
    const FilterPlayersGenderMale = Players.filter(player => {
      return player.playerGender === 'Male'
    })
    const FilterPlayersGenderFemale = Players.filter(player => {
      return player.playerGender === 'Female'
    })
    setPlayersCategoryA(FilterPlayersCategoryA)
    setPlayersCategoryB(FilterPlayersCategoryB)
    setPlayersCategoryC(FilterPlayersCategoryC)
    setPlayersGenderMale(FilterPlayersGenderMale)
    setPlayersGenderFemale(FilterPlayersGenderFemale)
  }, [Players]);

  return (
      <div className="home-container">
        {Players.length != 0 ?
          <>
          <div className="row m-0 allPlayersDoughnut-container">
            <div className="col-12 allPlayersDoughnut-title">
              <h2>All players by category</h2>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="allPlayersDoughnut-canvas w-25">
                <Doughnut data={allCategoriesPlayers} />
              </div>
            </div>
          </div>
          <div className="row m-0 allPlayersBar-container">
            <div className="col-12 allPlayersBar-title">
              <h2>All players by gender</h2>
            </div>
            <div className="col-12 allPlayersBar-canvas d-flex justify-content-center">
              <div className="w-50">
                <Bar data={allGenderPlayers} options={allGenderPlayersOptions} />
              </div>
            </div>
          </div>
          </>
        :
         <h2>No hay jugadores</h2>
        }
      </div>
  );
}