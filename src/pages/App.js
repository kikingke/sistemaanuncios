import '../styles/App.css';
import React from 'react'
import Header from '../components/header/Header';
import CategoryList from '../components/categorias/CategoryList';

function App() {
  return (
    <div className="container appcontainer mt-4 p-4" >
   
      <Header />
      <CategoryList />
     
    </div>
  );
}

export default App;
