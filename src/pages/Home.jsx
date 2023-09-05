import React from 'react'
import Carousel from '../component/Carousel';
import About from './About';
import Course from './Course';
import NewsEvents from './NewsEvents';

function Home() {
  return (
    <div>
      <Carousel/>
      <About />
      <Course/>
      <NewsEvents/>

    </div>
  )
}

export default Home