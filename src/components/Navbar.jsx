import Logo from './../assets/logo.png';

const Navbar = () => {

    return (
        <div className="w-full h-18 px-4 sm:px-24 py-2 bg-red-900 flex justify-between">
            <div className="w-48">
                <img src={Logo} className='w-full h-full object-cover'/>
            </div>
            <div className='flex gap-4 items-center max-sm:hidden'>
                <h4 className='font-semibold text-xl text-white'>Home</h4>
                <h4 className='font-semibold text-xl text-white'>About</h4>
                <h4 className='font-semibold text-xl text-white'>Contact Us</h4>
                <h4 className='font-semibold text-xl text-white'>Cart</h4>
            </div>
        </div>
    )
}

export default Navbar;