import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routing from './components/Routing'
import Footer from './components/Footer'


function App() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Routing />
        <Footer />
    </>
  )
}

export default App
