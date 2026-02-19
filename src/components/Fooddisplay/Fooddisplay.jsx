import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../Context/StoreContext';
import Fooditem from '../Fooditem/Fooditem'

function Fooddisplay({ category }) {

  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
