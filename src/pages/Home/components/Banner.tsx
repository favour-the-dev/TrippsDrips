import zip from '../../../assets/images/open_zip-bg.png';
import svgStar from '../../../assets/images/star-svg.svg';
import bannerShoe from '../../../assets/images/banner_hd.png';
import svgStarBlck from "../../../assets/images/star-black.svg";

function Banner() {
    return ( 
        <>
            <div className="max-cont flex flex-col md:flex-row items-center justify-between gap-4 my-10">
                {/* coloured banner */}
                <div className="bg-orange-600 text-white rounded-md md:w-1/2 py-5 relative min-h-[400px] overflow-hidden w-full">
                    {/* <img src={zip} alt="" className='absolute right-0 top-0 w-32 h-32'/> */}
                    <h1 className="bg-black text-white px-4 py-3 rounded-r-3xl text-xl md:text-3xl tracking-wider uppercase w-fit mt-5">
                    Step into Luxury
                    </h1>
                    <div className="p-5 text-2xl lg:text-3xl xl:text-4xl uppercase absolute bottom-5 left-0 tracking-wider z-10">
                        <h2>
                            Explore Our Exclusive  
                            <span className='font-semibold w-fit block relative before:absolute before:w-full before:left-0 before:bottom-[-2px] before:h-[4px] before:bg-orange-300'>
                                New Arrivals.
                            </span>
                        </h2>
                        <h3>Shop the latest collection</h3>
                        <h4 className='flex flex-wrap items-center gap-2'> and 
                            <span className='font-semibold w-fit block relative before:absolute before:w-full before:left-0 before:bottom-[-2px] before:h-[4px] before:bg-orange-300'>
                            elevate your style.
                            </span>
                        </h4>
                    </div>
                    <img src={svgStar} alt="" className='w-[300px] h-[300px] absolute bottom-[-10%] right-[-15%] opacity-30'/>
                </div>

                {/* bg-transparent banner */}
                <div className="bg-gray-100 rounded-md md:w-1/2 py-5 relative min-h-[400px] overflow-hidden w-full">
                    <img src={svgStarBlck} alt="" className='w-[300px] h-[300px] absolute top-[-5%] right-[-25%] lg:right-[-5%] opacity-30'/>
                    <img src={zip} alt="" className='absolute bottom-0 left-0 rotate-180 w-32 h-32'/>
                    <div className='p-5 flex flex-col gap-4'>
                        <h2 className='flex flex-col text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-wider'>
                            <span>NEXT</span>
                            <span>CHAPTER</span>
                        </h2>
                        <p className='text-sm tracking-wide'>MODEL: AIR-FORCE-ONE'S</p>
                    </div>
                    <div className='bg-orange-600 text-white px-4 py-3 rounded-r-3xl text-xl tracking-wide uppercase w-fit'>
                        Available 23/06 at 11:00 am
                    </div>
                    <img src={bannerShoe} className='w-[250px] h-[250px] lg:w-[350px] lg:h-[300px] absolute bottom-0 right-0' alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;