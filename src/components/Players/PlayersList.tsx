import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePlayer } from './playersSlice';
import { Link } from 'react-router-dom'
import * as XLSX from "xlsx";

import './Players.scss'

function PlayersList() {
    const dispatch = useDispatch();
    const Players = useSelector(state => state.players)
    const [PlayersSorted, setPlayersSorted] = useState(Players);
    console.log(PlayersSorted, 'PlayersSorted state')
    console.log(Players, 'Players state')
    

    const [excelData, setExcelData] = useState([]);





  useEffect(() => {
    const NewPlayersSorted = [...Players].sort((a, b) => {
      return a.playerName > b.playerName ? 1 : -1
    })

    setPlayersSorted(NewPlayersSorted)
  }, [Players]);
    
  const handleDelete = (id) => {
      dispatch(deletePlayer(id));
    };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(parsedData)
    }
  };


  return (
    <div className="players_list-container">
      <input
      type="file"
      accept='.xlsx, .xls'
      onChange={handleFileUpload}
      />
      <div>
        {excelData.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
                {excelData.map((row, index) => (

                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <h1 className="players_list-title">Jugadores {PlayersSorted.length}</h1>
      <Link to="añadir-jugador">Añadir Jugador</Link>
{/*       {PlayersSorted.map((player) => (
        <div className="" key={player.id}>
              <h3 className="">{player.playerName}</h3>
              <h3 className="">{player.playerCategory}</h3>
              <p className="">{player.id}</p>
              <button onClick={() => handleDelete(player.id)}>DELETE</button>
              <Link to={`/editar-jugador/${player.id}`}>Editar</Link>
        </div>
      ))} */}

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
        {PlayersSorted.map((player) => (
            <tr key={player.id}>
              <td className="">
                {player.playerName}
              </td>
              <td className="">
                {player.playerCategory}
              </td>
              <td className="">
                {player.id}
              </td>
              <td className="">
                <Link to={`/editar-jugador/${player.id}`}>Editar</Link>
              </td>
              <td className="">
                <button onClick={() => handleDelete(player.id)}>DELETE</button>
              </td>
            </tr>
        ))}
        </tbody>

      </table>
    </div>
  )
}

export default PlayersList