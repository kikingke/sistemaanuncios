import React from 'react'
import { Link } from "react-router-dom";

export default function CategoryCard({item}) {
  return (
    <>
       <div className="col-6 col-xs-6 col-sm-6 col-md-4">
        <Link 
          to={`/categoria/${item.id}`}
          state={{from: item.name }}
          >
          <div className="card mt-4">
            <img src={item.imgurl} className="card-img-top " alt="..." />
            <div className="card-body d-flex flex-column text-center">{item.name}<span className='numberAds'>(23)</span></div>
          </div>
         </Link>
       </div>
    </>
  );
}
