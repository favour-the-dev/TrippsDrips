import logo from "../assets/images/tripslogo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose} from "react-icons/md";
import { useState, useEffect } from "react";
function Navbar(){
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [scrolled, setIsScrolled] = useState<boolean>(false);

    function handleScroll() {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        console.log("ScrollY:", window.scrollY); // Debug current scroll position
    }
    
        useEffect(() => {
            window.addEventListener("scroll", handleScroll)

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, []);
    return (
    <>
        <nav className={`flex items-center justify-center sticky top-0 z-40 backdrop-blur-sm bg-white bg-opacity-80 ${scrolled && 'shadow-sm'}`}>
            <div className="max-cont flex items-center justify-between gap-3">
                {/* logo */}
                <div className="flex items-center gap-3 w-fit">
                    <img src={logo} alt="" className="rounded-full w-12 h-12 border-4 border-orange-600"/>
                    <p className={`font-bold text-xl`}>Tripps<span className={`text-orange-600`}>Drips</span></p>
                </div>

                {/* desktop nav */}
                <div className="hidden lg:flex items-center justify-between gap-12">
                    {/* navlinks */}
                    <div className="flex items-start gap-4 font-semibold text-lg">
                        <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear">Men</a>
                        <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear">Women</a>
                        <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear">Categories</a>
                        <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear">Brands</a>
                    </div>
                    {/* action CTA */}
                    <div className="flex items-center justify-between gap-6">
                        <label htmlFor="search" className="relative">
                            <CiSearch className="absolute top-[15px] left-[5px] text-xl font-bold"/>
                            <input 
                            type="text" 
                            name="search" 
                            placeholder="Search..." 
                            className="focus:outline-none px-8 py-3 placeholder:px-2 border rounded-full"/>
                        </label>
                        <FaShoppingBag className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer"/>
                        <IoPerson className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer"/>
                    </div>
                </div>

                {/* mobile nav */}
                <div className="lg:hidden">
                    <div className="font-bold text-4xl relative" onClick={() => setNavOpen((prevState: boolean) => !prevState)}>
                        <HiMenuAlt4 />
                    </div>
                    {/* mobile slide nav */}
                    <div className={`${navOpen ? 'block' : 'hidden'} bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen absolute left-0 top-0`}/>
                    <div className={`flex flex-col gap-8 space-y-8 absolute duration-300 ease-in-out transform shadow-md 
                        ${navOpen ? "translate-x-0" : "-translate-x-full"} min-w-fit w-full max-w-[75%] top-0 left-0 p-5 bg-black text-white h-screen`}>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3 w-fit">
                                <img src={logo} alt="" className="rounded-full w-12 h-12 border-4 border-white"/>
                                <p className={`font-bold text-xl`}>Tripps<span className={`text-orange-600`}>Drips</span></p>
                            </div>
                            <MdClose className="text-white font-bold text-4xl" onClick={() => setNavOpen((prevState: boolean) => !prevState)}/>
                        </div>
                        <div className="flex items-center justify-between gap-6">
                            <label htmlFor="search" className="">
                                <input 
                                type="text" 
                                name="search" 
                                placeholder="Search..." 
                                className="focus:outline-none px-5 py-3 text-black border rounded-full"/>
                            </label>
                        </div>
                        <div className="flex flex-col items-start gap-4 space-y-4 font-semibold text-3xl uppercase">
                            <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline">Men</a>
                            <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline">Women</a>
                            <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline">Categories</a>
                            <a href="" className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline">Brands</a>
                            <a 
                            href="" 
                            className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline flex items-center gap-2">
                                <FaShoppingBag className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer"/>
                                Cart
                            </a>
                            <a 
                            href="" 
                            className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear underline flex items-center gap-2">
                                <IoPerson className="hover:scale-105 hover:text-orange-600 duration-200 ease-linear cursor-pointer"/>
                                Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar