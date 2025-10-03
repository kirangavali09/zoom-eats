import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routing from './components/Routing'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { removeUserInfo, storeUserInfo } from './reducers/authSlice'
import { FIREBASE_APP } from './utils/firebaseAuth'


function App() {
    const auth = getAuth(FIREBASE_APP);
    const dispatch = useDispatch()

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
              if (user) {
                  dispatch(storeUserInfo(user.providerData[0]))
              } else {
                  dispatch(removeUserInfo())
              }
          });
    }, [])

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
