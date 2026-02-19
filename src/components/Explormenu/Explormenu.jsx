import React from 'react'
import "./Explormenu.css"
import { menu_list } from '../../assets/frontend_assets/assets';

function Explormenu({ category, setcategory }) {
  return (
    <div className='explor-menu' id='explor-menu'>
      <h1>Explore our menu</h1>

      <p className='explor-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your craving and elevate your dining experience.
        One delicious meal at a time.
      </p>

      <div className='explor-menu-list'>
        {menu_list.map((item, index) => (
          <div
            key={index}
            className='explor-menu-list-item'
            onClick={() =>
              setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
            <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  )
}

export default Explormenu;
