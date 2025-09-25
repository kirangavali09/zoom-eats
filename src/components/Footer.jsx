import Logo from './../assets/logo.svg';

const Footer = () => {

    return (
        <div className="w-full bg-gray-200 shadow-2xl px-8 lg:px-18 py-10 flex justify-between flex-wrap gap-4">
            <div className="w-full lg:w-6/12">
                <div className="w-48 sm:w-56 h-24 overflow-hidden">
                    <img src={Logo} className="w-full h-full object-cover -translate-x-8"/>
                </div>
                <div className='w-11/12 py-2 text-sm'>
                    Zoom Eats brings your favorite meals to your doorstep with speed, freshness, and flavor. Discover a wide range of cuisines, easy ordering, and fast delivery – because good food should never keep you waiting!
                </div>
            </div>
            <div className='w-full lg:w-5/12 flex gap-4 xl:gap-10 flex-wrap'>
                <div className='w-full md:w-5/12'>
                    <h3 className='font-bold py-4'>Quick Links</h3>
                    <div className='flex flex-col gap-2'>
                        <div className='cursor-pointer'>About Us</div>
                        <div className='cursor-pointer'>Contact Us</div>
                        <div className='cursor-pointer'>Customer Service</div>
                        <div className='cursor-pointer'>Terms & Condition</div>
                    </div>
                </div>
                <div className='w-full md:w-6/12'>
                    <h3 className='font-bold py-4'>Information</h3>
                    <div className='flex flex-col gap-2'>
                        <div>1949 Linda Street, West Brunswick Twp, PA 19549</div>
                        <div>b.b.lawlor@outlook.com</div>
                        <div>(301) 580-7410</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;