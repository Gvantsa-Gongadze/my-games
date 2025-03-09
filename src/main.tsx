import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorChangingGalaxyPage from './pages/ColorChangingGalaxyPage.tsx';
import Header from './components/Header.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<ColorChangingGalaxyPage />} />
        <Route path="/games" element={<ColorChangingGalaxyPage />} />
        <Route path="*" element={<ColorChangingGalaxyPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);
