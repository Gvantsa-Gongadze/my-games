import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/games" element={<Welcome />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
