import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import store from './../../app/store'
import { BiFemale } from 'react-icons/bi';
import { BiMale } from 'react-icons/bi';
import { BiMaleFemale } from 'react-icons/bi';
import { TbCircleLetterA } from 'react-icons/tb';
import { TbCircleLetterB } from 'react-icons/tb';
import { TbCircleLetterC } from 'react-icons/tb';

import './Sidebar.scss'


function Sidebar() {
    const Players = useSelector(state => state.players)

    const sideBarItemsMale = [
        { id: 'MasculinoA', text: ""},
        { id: 'MasculinoB', text: ""},
        { id: 'MasculinoC', text: ""},
      ];
    const sideBarItemsFemale = [
        { id: 'FemeninoA', text: ""},
        { id: 'FemeninoB', text: ""},
        { id: 'FemeninoC', text: ""},
      ];
    const sideBarItemsMixed = [
        { id: 'MixedA', text: ""},
        { id: 'MixedB', text: ""},
        { id: 'MixedC', text: ""},
      ];

    const getItemIcon = (id) => {
    switch(id) {
        case 'MasculinoA':
            return <TbCircleLetterA />
        case 'MasculinoB':
            return <TbCircleLetterB />
        case 'MasculinoC':
            return <TbCircleLetterC />
        case 'FemeninoA':
            return <TbCircleLetterA />
        case 'FemeninoB':
            return <TbCircleLetterB />
        case 'FemeninoC':
            return <TbCircleLetterC />
        case 'MixtoA':
            return <TbCircleLetterA />
        case 'MixtoB':
            return <TbCircleLetterB />
        case 'MixtoC':
            return <TbCircleLetterC />
        default:
            return null
        }
    }

    const getItemLink = (id) => {
        switch(id) {
            case 'MasculinoA':
                return 'jugadores/masculino/A'
            case 'MasculinoB':
                return 'jugadores/masculino/B'
            case 'MasculinoC':
                return 'jugadores/masculino/C'
            default:
                return ''
        }
    }

    const path = window.location.pathname
    useEffect(() => {
        if (path === '/jugadores/masculino/A') {
            document.getElementById("MasculinoA")?.classList.add('active')
        } else {
            document.getElementById("MasculinoA")?.classList.remove('active')
        }

        if (path === '/jugadores/masculino/B') {
            document.getElementById("MasculinoB")?.classList.add('active')
        } else {
            document.getElementById("MasculinoB")?.classList.remove('active')
        }

        if (path === '/jugadores/masculino/C') {
            document.getElementById("MasculinoC")?.classList.add('active')
        } else {
            document.getElementById("MasculinoC")?.classList.remove('active')
        }
        
          }, [path]);

  return (
    <>
    <div className="custom-sidebar">
        <ul id='sidebar-ul'>
            {/* <li key={val.id} onClick={() => setActiveItem(val.id)} className={`list ${activeItem === val.id ? "active" : ""}`}> */}
            {sideBarItemsMale.map((val) => (
            <li key={val.id} id={val.id}>
                <b></b>
                <b></b>
                <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiMale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    {/* <span className="title">{val.text}</span> */}
                </Link>
            </li>
            ))}
            {sideBarItemsFemale.map((val) => (
            <li key={val.id} id={val.id}>
                <b></b>
                <b></b>
                <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiFemale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    {/* <span className="title">{val.text}</span> */}
                </Link>
            </li>
            ))}
            {sideBarItemsFemale.map((val) => (
            <li key={val.id} id={val.id}>
                <b></b>
                <b></b>
                <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiMaleFemale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    {/* <span className="title">{val.text}</span> */}
                </Link>
            </li>
            ))}
        </ul>
    </div>
    </>
  );
}

export default Sidebar;