import { useState } from 'react';
import Logo from './../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import useActiveStatus from '../utils/useActiveStatus';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    const isOnline = useActiveStatus();

    return (
        <div className="w-full h-16 sm:h-20 px-4 sm:px-12 bg-zinc-100 lg:px-32 pt-2 flex justify-between shadow-lg">
            <Link to="/" className="w-36 sm:w-56">
                <img src={Logo} className='w-full h-full object-cover'/>
            </Link>
            <div className='flex gap-4 items-center max-sm:hidden'>
                <NavLink to="/" className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Home</NavLink>
                <NavLink to="/about" className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>About</NavLink>
                <NavLink className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Contact Us</NavLink>
                <NavLink className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Cart</NavLink>
                <NavLink className='px-3 py-1 text-xl bg-slate-400 cursor-pointer text-white rounded-md' onClick={() => setIsLoggedIn(!isLoggedIn)}>{ isLoggedIn ? "Logout" : "Login" }</NavLink>
                <NavLink >{isOnline ? "Online" : "Offline" }</NavLink>
            </div>
            <div className='sm:hidden flex items-center text-2xl'>
                <RxHamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar;