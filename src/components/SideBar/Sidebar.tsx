import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import store from './../../app/store'
import { FaBeer } from 'react-icons/fa';
import { BiTennisBall } from 'react-icons/bi';
import { MdSportsTennis } from 'react-icons/md';
import { TbTournament } from 'react-icons/tb';
import { TbCircleLetterA } from 'react-icons/tb';
import { TbCircleLetterB } from 'react-icons/tb';
import { TbCircleLetterC } from 'react-icons/tb';

import './Sidebar.scss'


function Sidebar() {
    const Players = useSelector(state => state.players)

    const sideBarItems = [
        { id: 'MasculinoA', text: "Masculino", icon: 'FaBeer'},
        { id: 'MasculinoB', text: "Masculino", icon: 'BiTennisBall'},
        { id: 'MasculinoC', text: "Masculino", icon: 'MdSportsTennis'},
      ];
      const [activeItem, setActiveItem] = useState();

      const getItemIcon = (id) => {
        switch(id) {
            case 'MasculinoA':
              return <TbCircleLetterA />
            case 'MasculinoB':
              return <TbCircleLetterB />
            case 'MasculinoC':
              return <TbCircleLetterC />
            default:
              return null
          }

    }


  return (
    <>
    <div className="custom-sidebar">
        <ul>
            {sideBarItems.map((val) => (
            <li key={val.id} onClick={() => setActiveItem(val.id)} className={`list ${activeItem === val.id ? "active" : ""}`}>
                <b></b>
                <b></b>
                <Link to={``}>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    <span className="title">{val.text}</span>
                </Link>
            </li>
            ))}
        </ul>
        {/* <ul>
            <li className="list active">
                <a href="">
                    <span className="icon"><FaBeer /></span>
                    
                    <span className="title">Home</span>
                </a>
            </li>
            <li className="list">
                <a href="">
                    <span className="icon"><BiTennisBall/></span>
                    <span className="title">Home2</span>
                </a>
            </li>
            <li className="list">
                <a href="">
                    <span className="icon"><MdSportsTennis/></span>
                    <span className="title">Home3</span>
                </a>
            </li>
            <li className="list">
                <a href="">
                    <span className="icon"><TbTournament/></span>
                    <span className="title">Home4</span>
                </a>
            </li>
            <li className="list">
                <a href="">
                    <span className="icon"><TbCircleLetterA /></span>
                    <span className="title">Home5</span>
                </a>
            </li>
        </ul> */}
    </div>
    </>
  );
}

export default Sidebar;