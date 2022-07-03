import React from 'react'
import CategoryCard from './CategoryCard';
import {category} from '../../utils/category'

export default function CategoryList() {

  
  return (
    <div>
      <div className="listcontainer mt-4">
        <div className="row">
            {
               category.map((item)=>(
                <CategoryCard key={item.id} item={item} />
               ))
            }
        </div>
      </div>
    </div>
  );
}
