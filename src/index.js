import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import CountPage from './pages/demonstrate-usestate';
import EffectPage from './pages/demonstrate-useeffect';
import AxiosFetchPage from './pages/dataFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/useState" element={<CountPage />} />
        <Route path='/useEffect' element={<EffectPage />} />
        <Route path='/fetched' element={<AxiosFetchPage />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
);

