import React,{useState} from 'react'
import Header from '../header/Header'
import Imgupload from './Imgupload'
import { Link } from "react-router-dom";
import {category} from '../../utils/category.js'
import {departamentos} from '../../utils/departamentos.js'

export default function NuevoAnuncio() {
  const [form, setForm] = useState({});

function handleChange(e){
e.preventDefault();
setForm({
  ...form,
  [e.target.name]:e.target.value
})
}

function handleChangeChecked(e){
  e.preventDefault();
  setForm({
    ...form,
    [e.target.name]:e.target.checked
    
  })

  }

  function handleSubmit(e){
    e.preventDefault();

    if(Object.keys(form).length < 7){
      console.log("Negras");
         
    }else{
      console.log(form);
    }

  }

  return (
    <div className="container appcontainer mt-4 p-4">
      <Header />
        <form className="row mt-4 justify-content-center" onSubmit={handleSubmit}>
          <div className="col-xs-12 col-sm-12 col-md-5">
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">
                Titulo:
              </label>
              <input
                id="titulo"
                type="text"
                className="form-control"
                name="titulo"
                value={form.titulo || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">
                Categoria:
              </label>
              <select id="categoria" className="form-select" onChange={handleChange} name="categoria" >
              <option defaultValue="">Escoger una categoria</option>
                {
                   category.map((c)=>(
                      <option key={c.id} value={c.name}>{c.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="departamento" className="form-label">
                Departamento:
              </label>
              <select id='departamento' className="form-select" onChange={handleChange} name="departamento">
              <option defaultValue="">Escoger un departamento</option>
                {
                   departamentos.map((c)=>(
                      <option key={c.id} value={c.name}>{c.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Imagenes:
              </label>
              <Imgupload />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5">
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción:
              </label>
              <textarea   
              id="descripcion"
              name="descripcion"
                value={form.descripcion || ''}
                onChange={handleChange} 
                className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono:
              </label>
              <input
              id="telefono"
                type="number"
                className="form-control"
                name="telefono"
                value={form.telefono || ''}
                onChange={handleChange} 
              />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="whatsapp" name="whatsapp"  onChange={handleChangeChecked}  />
                <label className="form-check-label" htmlFor="whatsapp">
                  Permitir me contacten por Whatsapp
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
              id="email"
                type="email"
                className="form-control"
                name="email"
                value={form.email || ''}
                onChange={handleChange} 
              />
              <div className="form-check">
                <input className="form-check-input" type="checkbox"  id="showemail" name="showemail"  onChange={handleChangeChecked} />
                <label className="form-check-label" htmlFor="showemail">
                  No mostrar email en anuncio
                </label>
              </div>
            </div>
            <div className="mb-3 d-grid gap-1 d-md-flex justify-content-md-between">
              <button type="submit" className="btn btn-success ">
                <i className="bi bi-send"></i> Publicar
             </button>
          <Link to="/" className="btn btn-danger ">
             <i className="bi bi-x-circle"></i> Cancelar
          </Link>
            </div>
          
          </div>

        </form>
    </div>
  );
}
