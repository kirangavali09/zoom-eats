import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Search from './components/Search'
import RestaurantContainer from './components/RestaurantContainer'

function App() {

  return (
    <>
      <Navbar />
      <Search />
      <RestaurantContainer />
    </>
  )
}

export default App
