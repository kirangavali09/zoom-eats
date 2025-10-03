import { useState } from 'react';
import Logo from './../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useActiveStatus from '../utils/useActiveStatus';
import { useSelector } from 'react-redux';
import { FIREBASE_APP } from '../utils/firebaseAuth';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    const isOnline = useActiveStatus();
    const cartItems = useSelector((store) => store.cart.items)
    const authUser = useSelector((store) => store.auth.userInfo[0]);
    const navigate = useNavigate();
    const handleSignOut = () => {
        const auth = getAuth(FIREBASE_APP);
        signOut(auth).then(() => {
            navigate('/sign-in');
        }).catch((error) => {
        // An error happened.
        });
    }

    const [showSignOut, setShowSignOut] = useState(false);

    return (
        <div className="w-full h-16 sm:h-20 px-4 sm:px-12 bg-zinc-100 lg:px-20 pt-2 flex justify-between shadow-lg">
            <Link to="/" className="w-36 sm:w-56">
                <img src={Logo} className='w-full h-full object-cover -translate-x-6'/>
            </Link>
            <div className='flex gap-4 items-center max-lg:hidden'>
                <NavLink to="/" className='font-bold text-xl text-zinc-800 cursor-pointer'>Home</NavLink>
                <NavLink to="/contact" className='font-bold text-xl text-zinc-800 cursor-pointer'>Contact Us</NavLink>
                <NavLink to="/cart" className='font-bold text-xl text-zinc-800 cursor-pointer'>
                    Cart ({cartItems.reduce((acc, item) => acc + item.qty ,0)})
                </NavLink>
                <NavLink to="/sign-in" className={`font-bold text-xl text-zinc-800 cursor-pointer
                    ${authUser?.uid ? 'hidden' : '' }`}>Sign In</NavLink>
                
                <NavLink
                    className={`font-bold text-xl text-zinc-800 cursor-pointer relative py-2
                        ${authUser?.uid ? '' : 'hidden' }`}
                    onMouseEnter={() => setShowSignOut(true)}
                    onMouseLeave={() => setShowSignOut(false)}
                >
                    {authUser?.uid.split("@")[0]}
                    {showSignOut && (
                        <div onClick={handleSignOut} className='absolute w-24 py-1 px-2 bg-white shadow-2xl text-zinc-900 text-md rounded-md top-10 right-0.5 text-center'>
                            Sign out
                        </div>
                    )}
                </NavLink>
                {/* <NavLink >{isOnline ? "Online" : "Offline" }</NavLink> */}
            </div>
            <div className='lg:hidden flex items-center text-2xl'>
                <RxHamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar;