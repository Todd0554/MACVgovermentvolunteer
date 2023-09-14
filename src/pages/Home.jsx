import React from 'react'
import Carousel from '../component/Carousel';
import About from './About';
import Course from './Course';
import NewsEvents from './NewsEvents';
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
      <Contact/>

    </div>
  )
}

export default Home