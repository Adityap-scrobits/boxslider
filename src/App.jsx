import { useState } from 'react'
import BoxSlider from './components/BoxSlider'
import ImageLoopSlider from './components/ImageLoopSlider'
import './App.css'

function App() {


  return (
    <div className='main-container'>
      <BoxSlider/>
      <ImageLoopSlider/>
    </div>
  )
}

export default App
