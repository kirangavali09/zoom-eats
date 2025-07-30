import { useState } from 'react';
import Logo from './../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    return (
        <div className="w-full h-16 sm:h-20 px-4 sm:px-12 bg-zinc-100 lg:px-32 pt-2 flex justify-between shadow-lg">
            <div className="w-36 sm:w-56">
                <img src={Logo} className='w-full h-full object-cover'/>
            </div>
            <div className='flex gap-4 items-center max-sm:hidden'>
                <h4 className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Home</h4>
                <h4 className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>About</h4>
                <h4 className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Contact Us</h4>
                <h4 className='font-bold text-xl uppercase text-zinc-900 cursor-pointer'>Cart</h4>
                <h4 className='px-3 py-1 text-xl bg-slate-400 cursor-pointer text-white rounded-md' onClick={() => setIsLoggedIn(!isLoggedIn)}>{ isLoggedIn ? "Logout" : "Login" }</h4>
            </div>
            <div className='sm:hidden flex items-center text-2xl'>
                <RxHamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar;