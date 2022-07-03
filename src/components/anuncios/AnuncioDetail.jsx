import React from 'react'
import Header from '../header/Header'
import { useLocation } from 'react-router-dom'
import ImgSlider from '../slider/ImgSlider';

export default function AnuncioDetail() {
  const location = useLocation();
  const objAnuncio = location.state.item;

  const handleclickWhasapp=(e)=>{
    e.preventDefault();
console.log("jk");
  }


  return (
    <div className="container appcontainer mt-4 p-4">
      <Header />
      <section className="itemdetailscontainer p-4">
        <form className="row">
        <div className="mb-3">
        <h2>{objAnuncio.title}</h2>
        </div>
          <div className="col col-md-6">
            <div className="mb-3 bigImage">
            <ImgSlider key={objAnuncio.id} item={objAnuncio} />
            </div>
          </div>
          <div className="col col-md-6">
            <div className="mb-3">
              <h6 className="form-label font-">
                Descripción:
              </h6>
             <p>{objAnuncio.description}</p>
            </div>
            <div className="footerItemContainer mb-3">
              <p className='catAndDep'><i className="bi bi-archive"></i> {objAnuncio.category} | <i className="bi bi-geo-alt-fill"></i> {objAnuncio.departamento}</p>
              <p className='publishedItem'><i className="bi bi-calendar-check"></i> Publicado: {objAnuncio.published}</p>
            </div>
            {
              objAnuncio.whatsapp ? (
                <div className="mb-3">
                   <a href={`https://wa.me/${objAnuncio.phone}`} className='btn btn-outline-success rounded-4' target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i> {objAnuncio.phone}</a>
                </div>
              ):""
            }
            {
              objAnuncio.showemail ? (
                <div className="mb-3">
                   <a href={`mailto:${objAnuncio.email}`} className='btn btn-outline-info rounded-4' target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i> {objAnuncio.email}</a>
                </div>
              ):""
            }
            
          </div>
        </form>
      </section>
    </div>
  );
}
