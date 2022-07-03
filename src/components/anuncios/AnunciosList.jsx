import React,{useState} from 'react'
import data from '../../utils/data.json'
import AnuncioListItem from './AnuncioListItem';

export default function AnunciosList({props}) {
  const [selectedCategory, setSelectedCategory] = useState(props);

  var filtrado = data.filter((item) => item.category === selectedCategory);

  return (
    <section className="anunlistContainer">
    
          <ul className='ulcontainer row'>
        {
        
        !filtrado.length == 0 ?
          
          filtrado.map((item) =>(
          <div className="col col-sm-12 col-md-12 col-lg-6" key={item.id} >
            <AnuncioListItem item={item} />
          </div>
          ))
        :
        <div className='badge bg-warning text-dark'>
          <h5 className='p-4'><i className="bi bi-exclamation-triangle"></i> No hay anuncios en esta categoria actualmente</h5>
        </div>
        }
      </ul>
     
    </section>
  );
}
