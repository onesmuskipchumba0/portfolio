import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="pt-16">
        <Home />
        {/* Other sections will go here */}
      </main>
    </div>
  )
}

export default App
