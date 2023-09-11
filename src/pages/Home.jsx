import React from 'react'
import Carousel from '../component/Carousel';
import About from './About';
import Course from './Course';
import NewsEvents from './NewsEvents';
import JoinUs from './JoinUs';
import Contact from './Contact';
import GalleryTes from '../component/GalleryTes';

function Home() {
  return (
    <div>
      <Carousel/>
      <About />
      <Course/>
      <NewsEvents/>
      <GalleryTes/>
      <JoinUs/>
      <Contact/>

    </div>
  )
}

export default Home