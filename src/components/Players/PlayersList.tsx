import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deletePlayer } from './playersSlice';
import { updatePlayersList } from './playersSlice';
import { Link } from 'react-router-dom'
import * as XLSX from "xlsx";
import store from './../../app/store'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

import LoadingSpinner from "./../Spinner/Spinner";
import './PlayersList.scss'

function PlayersList() {
  const dispatch = useDispatch();
  const Players = useSelector(state => state.players)
  /* console.log(store.getState().players) */
  const [isLoading123, setIsLoading] = useState(false);

  useEffect(() => {
/*     const NewPlayersSorted = [...Players].sort((a, b) => {
      return a.playerName > b.playerName ? 1 : -1
    }) */

  }, []);

  const handleDelete = (id) => {
      dispatch(deletePlayer(id));
    };
    
  const clickHiddenInput = () => {
    document.getElementById("file-input").click();
  }
  const handleFileUpload = (e) => {
    setIsLoading(true)

    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      parsedData.map(obj => {
        const idsToString = obj.id.toString()
        const firstPlayername = obj.firstPlayerName
        const secondPlayername = obj.secondPlayerName
        const categories = obj.playerCategory
        const gender = obj.playerGender
        const allDataFormated = {}
        allDataFormated.firstPlayerName = firstPlayername
        allDataFormated.secondPlayerName = secondPlayername
        allDataFormated.playerCategory = categories
        allDataFormated.playerGender = gender
        allDataFormated.id = idsToString
        dispatch(updatePlayersList(allDataFormated))
        return obj
      })
    }
    setTimeout(function () {
      setIsLoading(false)
    }, 2000)
  };

  const handleFileDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(Players);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Players");
/*     XLSX.utils.sheet_add_aoa(worksheet,[
      ["Nombre Jugador", "Categoria", "Id"],
    ]); */
    XLSX.writeFile(workbook, "ListaJugadores.xlsx", { compression: true });
  };

  return (
    <>
    <div className="players_list-container">
        <div className="file-input">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            accept='.xlsx, .xls'
            onChange={handleFileUpload}
        />
          <label className="file-input__label" onClick={clickHiddenInput}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Upload file</span></label>
        </div>
{/*       <input
      type="file"
      accept='.xlsx, .xls'
      onChange={handleFileUpload}
      /> */}
      <button
      className=""
      role="button"
      onClick={handleFileDownload}>
        Exportar plantilla
      </button>

      {/* <button onClick={handleFileDownload}>Export</button> */}
      <div>
      </div>
      <h1 className="players_list-title">Jugadores {Players.length}</h1>
      <Link
      to='/añadir-jugador'
      className="button-85"
      role="button">
      Añadir Jugador
      </Link>
      {Players.length > 0 && (
        <table id="players-table">
          <thead>
            <tr>
              <th key={'firstName'}>First Player Name</th>
              <th key={'SecondName'}>Second Player Name</th>
              <th key={'category'}>Category</th>
              <th key={'id'}>Gender</th>
            </tr>
          </thead>
          <tbody>
          {Players.map((player, key) => (
              <tr key={key}>
                <td key={key+'firstname'} className="">
                  {player.firstPlayerName}
                </td>
                <td key={key+'secondname'} className="">
                  {player.secondPlayerName}
                </td>
                <td key={key+'category'} className="">
                  {player.playerCategory}
                </td>
                <td key={key+'id'} className="">
                  {player.playerGender}
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
      {isLoading123 ? <LoadingSpinner /> : ''}
    </div>
    </>
  )
}

export default PlayersList