import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import PlayersForm from '../components/Players/PlayersForm'
import PlayersList from '../components/Players/PlayersList'
import PlayersMaleA from '../components/Male/A/MaleA'
import PlayersMaleB from '../components/Male/B/MaleB'
import PlayersMaleC from '../components/Male/C/MaleC'
import PreHome from '../components/Home/preHome'
import Home from '../components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PreHome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/jugadores' element={<PlayersList/>}/>
          <Route path='/añadir-jugador' element={<PlayersForm/>}/>
          <Route path='/editar-jugador/:id' element={<PlayersForm/>}/>
          <Route path='/jugadores/masculino/A' element={<PlayersMaleA/>}/>
          <Route path='/jugadores/masculino/B' element={<PlayersMaleB/>}/>
          <Route path='/jugadores/masculino/C' element={<PlayersMaleC/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
