function Footer(){
    return (
        <>
            <footer className="max-cont my-5">
                <div className="w-full flex flex-wrap lg:flex-nowrap lg:justify-start gap-8">
                    {/* logo */}
                    <div className="flex flex-col gap-3 lg:w-1/3">
                        <div className="flex items-center gap-3 w-fit">
                            {/* <img src={logo} alt="" className="rounded-full w-12 h-12 border-4 border-orange-600"/> */}
                            <p className={`font-bold text-xl`}>Tripps<span className={`text-orange-600`}>Drips</span></p>
                        </div>
                        <p className="text-gray-500 text-sm">Finding your fashion has never been easier, browse the best selection of famous fashion brands, that suit your style and preferences.</p>
                    </div>
                    {/* menu */}
                    <div className="flex flex-col gap-4 lg:w-1/3">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Men</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear">Women</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Order Tracking</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Blog</span>
                    </div>
                    {/* faq */}
                    <div className="flex flex-col gap-4 lg:w-1/3 self-center">
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Faq</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Privacy Policy</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Terms & Conditions</span>
                    </div>
                    {/* contact */}
                    <div className="flex flex-col gap-4 lg:w-1/3">
                        <h2 className="text-lg font-semibold">Connect With Us</h2>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Contact Us</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Instagram</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">Facebook</span>
                        <span className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer">X</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer