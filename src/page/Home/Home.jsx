import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explormenu from '../../components/Explormenu/Explormenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import AppDawnload from '../../components/AppDownload/AppDownload'





function Home() {

  const [category, setcategory] = useState("All");
  return (
    <div>
     
      <Header />
      <Explormenu category={category} setcategory={setcategory} />
      <Fooddisplay category={category} />
      <AppDawnload />
      

     
    </div>
  )
}

export default Home;