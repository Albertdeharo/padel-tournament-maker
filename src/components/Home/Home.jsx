import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import "./Home.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const Players = useSelector(state => state.players)
  const [PlayersCategoryA, setPlayersCategoryA] = useState([]);
  const [PlayersCategoryB, setPlayersCategoryB] = useState([]);
  const [PlayersCategoryC, setPlayersCategoryC] = useState([]);

  const CategoriesData = {
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
    setPlayersCategoryA(FilterPlayersCategoryA)
    setPlayersCategoryB(FilterPlayersCategoryB)
    setPlayersCategoryC(FilterPlayersCategoryC)
  }, [Players]);

  return (
    <>
      <Navbar/>
      <div className="doughnut-container">
        {Players.length > 1 ?
          <Doughnut data={CategoriesData} />
        :
         <h2>No hay jugadores</h2>
        }
      </div>
    </>
  );
}