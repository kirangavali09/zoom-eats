import Logo from './../assets/logo.svg';

const Navbar = () => {

    return (
        <div className="w-full h-12 sm:h-20 px-4 sm:px-12 bg-zinc-100 lg:px-32 pt-2 flex justify-between shadow-lg">
            <div className="w-32 sm:w-56">
                <img src={Logo} className='w-full h-full object-cover'/>
            </div>
            <div className='flex gap-4 items-center max-sm:hidden'>
                <h4 className='font-semibold text-xl text-zinc-800'>Home</h4>
                <h4 className='font-semibold text-xl text-zinc-800'>About</h4>
                <h4 className='font-semibold text-xl text-zinc-800'>Contact Us</h4>
                <h4 className='font-semibold text-xl text-zinc-800'>Cart</h4>
            </div>
        </div>
    )
}

export default Navbar;