import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
function App() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<ProjectsPage/>} path='/projects'/>
        </Routes>
        </BrowserRouter>
        <Footer />
    </>
 
  )
}

export default App
