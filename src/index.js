import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import CategoryItem from './components/categorias/CategoryItem';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer';
import NuevoAnuncio from './components/anuncios/NuevoAnuncio';
import AnuncioDetail from './components/anuncios/AnuncioDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/new/" element={<NuevoAnuncio />} />
        <Route exact path="/categoria/:id" element={<CategoryItem />} />
        <Route exact path="/anuncio/:id" element={<AnuncioDetail />} />
      </Routes>
    </Router>
    
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
