import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePlayer } from './playersSlice';
import { updatePlayersList } from './playersSlice';
import { Link } from 'react-router-dom'
import * as XLSX from "xlsx";

import './Players.scss'

function PlayersList() {
    const dispatch = useDispatch();
    const Players = useSelector(state => state.players)
    const [excelData, setExcelData] = useState([]);

  useEffect(() => {
/*     const NewPlayersSorted = [...Players].sort((a, b) => {
      return a.playerName > b.playerName ? 1 : -1
    }) */

  }, []);

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
      /* setExcelData(parsedData) */
      parsedData.map(obj => {
        const idsToString = obj.id.toString()
        const names = obj.playerName
        const categories = obj.category
        const allDataFormated = {}
        allDataFormated.playerName = names
        allDataFormated.playerCategory = categories
        allDataFormated.id = idsToString
        dispatch(updatePlayersList(allDataFormated))
        return obj
      })
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
      </div>
      <h1 className="players_list-title">Jugadores {Players.length}</h1>
      <Link to="añadir-jugador">Añadir Jugador</Link>
      {Players.length > 0 && (
        <table id="players-table">
          <thead>
            <tr>
              <th key={'nombre'}>Nombre</th>
              <th key={'categoria'}>Categoria</th>
              <th key={'id'}>Id</th>
            </tr>
          </thead>
          <tbody>
          {Players.map((player, key) => (
              <tr key={key}>
                <td key={key+'name'} className="">
                  {player.playerName}
                </td>
                <td key={key+'categori'} className="">
                  {player.playerCategory}
                </td>
                <td key={key+'id'} className="">
                  {player.id}
                </td>
                <td key={key+'edit'} className="">
                  <Link  key={key+'link'} to={`/editar-jugador/${player.id}`}>Editar</Link>
                </td>
                <td key={key+'delete'} className="">
                  <button  key={key+'btn'} onClick={() => handleDelete(player.id)}>DELETE</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default PlayersList