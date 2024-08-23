import React from 'react'
import "./main2.css"
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import BannerProduct from '../components/BannerProduct'
import VerticalCard from '../components/VerticalCardProduct'
const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>


      


      
<div id="txt">
      <HorizontalCardProduct id="txt"category={"speakers"} heading={"Top Speakers"}/>

      <HorizontalCardProduct id="txt" category={"watches"} heading={"Top Watches"}/>
 <HorizontalCardProduct category={"trimmers"} heading={"Top Trimmers"}/>
 <VerticalCard category={"Mouse"} heading={"Top Mouses"}/>
 <HorizontalCardProduct id="txt" category={"earphones"} heading={"Top Earphones"}/>
 <HorizontalCardProduct id="txt" category={"airpodes"} heading={"Top Airpodes"}/>
 <VerticalCard category={"camera"} heading={"Top Camera"}/>
 <VerticalCard category={"televisions"} heading={"Top TV'S"}/>

 <HorizontalCardProduct id="txt" category={"mobiles"} heading={"Top Mobiles"}/>
 <HorizontalCardProduct id="txt" category={"processor"} heading={"Top Processor"}/>
 <VerticalCard category={"refrigerator"} heading={"Top Fridges"}/>
 <VerticalCard category={"printers"} heading={"Top Printers"}/>

 </div>
    </div>
  )
}

export default Home
