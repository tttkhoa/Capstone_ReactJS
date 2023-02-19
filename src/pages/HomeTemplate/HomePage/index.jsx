import React from 'react'
import Header from '../_component/Header/header'
import CarouselReactBootstrap from '../HomePage/Carousel/carousel'
import ListMovie from '../ListMovie/list-movie'
import Footer from "../_component/Footer/footer"
import Theatre from './Theatre/theatre'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <CarouselReactBootstrap/>
      <ListMovie/>
      <Theatre/>
      <Footer/>
    </div>
  )
}
