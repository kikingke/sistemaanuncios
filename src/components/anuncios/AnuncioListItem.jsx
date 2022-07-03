import React from 'react'
import ImgSlider from '../slider/ImgSlider';
import { Link } from "react-router-dom";

export default function AnuncioListItem({item}) {

function slideDescriptionText(texto){
  var result = `${texto.slice(0, 130)}...`;
  return result;
}

  return (
    <li className="liContainer">
      <div className="itemContainer">
        
          <div className="d-flex">
            <ImgSlider key={item.id} item={item} />
            
            <div className="txtContainer">
            <Link 
                  to={`/anuncio/${item.id}`}
                  state={{item}}
                  className="linkItem"
              >
              <h3 className="itemTitle">{item.title}</h3>
              <p className='itemContentText'>{slideDescriptionText(item.description)}</p>

            </Link>
            <div className="footerItemContainer">
              <p className='catAndDep'><i className="bi bi-archive"></i> {item.category} | <i className="bi bi-geo-alt-fill"></i> {item.departamento}</p>
              <p className='publishedItem'><i className="bi bi-calendar-check"></i> Publicado: {item.published}</p>
            </div>
            </div>
            
          </div>
        
      </div>
    </li>
  );
}
