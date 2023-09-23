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
    const [expandedItem, setExpandedItem] = useState(null);

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
        { id: 'MixtoA', text: ""},
        { id: 'MixtoB', text: ""},
        { id: 'MixtoC', text: ""},
        ];

    const toggleMenu = (menuType) => {
        if (expandedItem === menuType) {
            setExpandedItem(null);
        } else {
            setExpandedItem(menuType);
        }
    };

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
            case 'FemeninoA':
                return 'jugadores/femenino/A'
            case 'FemeninoB':
                return 'jugadores/femenino/B'
            case 'FemeninoC':
                return 'jugadores/femenino/C'
            case 'MixtoA':
                return 'jugadores/mixto/A'
            case 'MixtoB':
                return 'jugadores/mixto/B'
            case 'MixtoC':
                return 'jugadores/mixto/C'
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

        if (path === '/jugadores/femenino/A') {
            document.getElementById("FemeninoA")?.classList.add('active')
        } else {
            document.getElementById("FemeninoA")?.classList.remove('active')
        }
        if (path === '/jugadores/femenino/B') {
            document.getElementById("FemeninoB")?.classList.add('active')
        } else {
            document.getElementById("FemeninoB")?.classList.remove('active')
        }
        if (path === '/jugadores/femenino/C') {
            document.getElementById("FemeninoC")?.classList.add('active')
        } else {
            document.getElementById("FemeninoC")?.classList.remove('active')
        }

        if (path === '/jugadores/mixto/A') {
            document.getElementById("MixtoA")?.classList.add('active')
        } else {
            document.getElementById("MixtoA")?.classList.remove('active')
        }
        if (path === '/jugadores/mixto/B') {
            document.getElementById("MixtoB")?.classList.add('active')
        } else {
            document.getElementById("MixtoB")?.classList.remove('active')
        }
        if (path === '/jugadores/mixto/C') {
            document.getElementById("MixtoC")?.classList.add('active')
        } else {
            document.getElementById("MixtoC")?.classList.remove('active')
        }
        
          }, [path, expandedItem]);

  return (
    <>
    <div className="custom-sidebar">
        <nav id='sidebar-nav'>
            <span
                className={`sidebar-item__title ${expandedItem === 'Men' ? 'expanded' : ''}`}
                onClick={() => toggleMenu('Men')}
            >
                Men
            </span>
            {expandedItem === 'Men' && (
                sideBarItemsMale.map((val) => (
                <li key={val.id} id={val.id}>
                    <b></b>
                    <b></b>
                    <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiMale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    </Link>
                </li>
                ))
            )}
            <span
                className={`sidebar-item__title ${expandedItem === 'Women' ? 'expanded' : ''}`}
                onClick={() => toggleMenu('Women')}
            >
                Women
            </span>
            {expandedItem === 'Women' && (
                sideBarItemsFemale.map((val) => (
                <li key={val.id} id={val.id}>
                    <b></b>
                    <b></b>
                    <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiFemale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    </Link>
                </li>
                ))
            )}
            <span
                className={`sidebar-item__title ${expandedItem === 'Mixed' ? 'expanded' : ''}`}
                onClick={() => toggleMenu('Mixed')}
            >
                Mixed
            </span>
            {expandedItem === 'Mixed' && (
            sideBarItemsMixed.map((val) => (
                <li key={val.id} id={val.id}>
                    <b></b>
                    <b></b>
                    <Link to={'/' + getItemLink(val.id)}>
                    <span className="icon"><BiMaleFemale /></span>
                    <span className="icon">{getItemIcon(val.id)}</span>
                    </Link>
                </li>
                ))
            )}
        </nav>
    </div>
    </>
  );
}

export default Sidebar;