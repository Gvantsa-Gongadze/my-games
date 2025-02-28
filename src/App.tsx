import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.tsx';
import Header from './components/Header.tsx';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/games" element={<WelcomePage />} />
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
