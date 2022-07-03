import React from 'react'
import Header from '../header/Header'
import { useLocation } from 'react-router-dom'
import AnunciosList from '../anuncios/AnunciosList';


export default function CategoryItem() {
  const {state} = useLocation();
  return (
    <section className="container appcontainer mt-4 p-4">
         <Header />
         <h6 className='mt-4'>Anuncios por la Categoria de {state.from}</h6>
         <AnunciosList props={state.from} />
    </section>
   
  )
}
