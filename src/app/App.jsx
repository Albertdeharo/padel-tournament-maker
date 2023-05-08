import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import PlayersForm from '../components/Players/PlayersForm'
import PlayersList from '../components/Players/PlayersList'

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
