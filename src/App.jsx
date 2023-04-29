import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PlayersForm from './components/PlayersForm'
import PlayersList from './components/PlayersList'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlayersList/>}/>
        <Route path='/añadir-jugador' element={<PlayersForm/>}/>
        <Route path='/editar-jugador/:id' element={<PlayersForm/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
