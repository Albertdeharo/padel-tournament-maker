import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './../components/Layout/Layout';
import CourtForm from '../components/Court/CourtForm'
import PlayersForm from '../components/Players/PlayersForm'
import PlayersList from '../components/Players/PlayersList'
import PlayersMaleA from '../components/Male/A/MaleA'
import PlayersMaleB from '../components/Male/B/MaleB'
import PlayersMaleC from '../components/Male/C/MaleC'
import PlayersFemaleA from '../components/Female/A/FemaleA'
import PlayersFemaleB from '../components/Female/B/FemaleB'
import PlayersFemaleC from '../components/Female/C/FemaleC'
import PlayersMixedA from '../components/Mixed/A/MixedA'
import PlayersMixedB from '../components/Mixed/B/MixedB'
import PlayersMixedC from '../components/Mixed/C/MixedC'
import PreHome from '../components/Home/preHome'
import Home from '../components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PreHome/>}/>
          <Route
            path='/home'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/añadir-pistas'
            element={
              <Layout>
                <CourtForm />
              </Layout>
            }
          />
          <Route
            path='/jugadores'
            element={
              <Layout>
                <PlayersList />
              </Layout>
            }
          />
          <Route
            path='/añadir-jugador'
            element={
              <Layout>
                <PlayersForm />
              </Layout>
            }
          />
          <Route
            path='/editar-jugador/:id'
            element={
              <Layout>
                <PlayersForm />
              </Layout>
            }
          />
          <Route
            path='/jugadores/masculino/A'
            element={
              <Layout>
                <PlayersMaleA />
              </Layout>
            }
          />
          <Route
            path='/jugadores/masculino/B'
            element={
              <Layout>
                <PlayersMaleB />
              </Layout>
            }
          />
          <Route
            path='/jugadores/masculino/C'
            element={
              <Layout>
                <PlayersMaleC />
              </Layout>
            }
          />
          <Route
            path='/jugadores/femenino/A'
            element={
              <Layout>
                <PlayersFemaleA />
              </Layout>
            }
          />
          <Route
            path='/jugadores/femenino/B'
            element={
              <Layout>
                <PlayersFemaleB />
              </Layout>
            }
          />
          <Route
            path='/jugadores/femenino/C'
            element={
              <Layout>
                <PlayersFemaleC />
              </Layout>
            }
          />
          <Route
            path='/jugadores/mixto/A'
            element={
              <Layout>
                <PlayersMixedA />
              </Layout>
            }
          />
          <Route
            path='/jugadores/mixto/B'
            element={
              <Layout>
                <PlayersMixedB />
              </Layout>
            }
          />
          <Route
            path='/jugadores/mixto/C'
            element={
              <Layout>
                <PlayersMixedC />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
