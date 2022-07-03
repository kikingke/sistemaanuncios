import React from 'react'
import {category} from '../../utils/category.js'

export default function Searchbox() {
  return (
    <form className="searchbox d-none d-md-block ">
      <input
        className="form-control inputSearchBox"
        type="search"
        placeholder="Ingresa tu busqueda..."
        aria-label="Search"
      />
      <div className="categoryContainer">
      <select id="categoria" className="selectCat" name="categoria" >
              <option defaultValue="">Escoger una categoria</option>
                {
                   category.map((c)=>(
                      <option key={c.id} value={c.name}>{c.name}</option>
                  ))
                }
              </select>
</div>
      <button className="btnSearch" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
