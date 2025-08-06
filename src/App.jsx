import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routing from './components/Routing'


function App() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Routing />
    </>
  )
}

export default App
