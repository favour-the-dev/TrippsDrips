import running from '../../../assets/images/modern_sports.png';
import sports from '../../../assets/images/sports_shoes-removebg-preview.png';
import { GoNorthStar } from "react-icons/go";
import openzip from '../../../assets/images/open_zip-bg.png';
function Collection(){
    return (
        <>
            <div className="h-full my-10 max-cont flex flex-col gap-12">
                {/* text */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <h2 className="md:w-1/2 font-bold capitalize text-5xl">New Style For Latest Collection</h2>
                    <p className="md:w-1/2 text-gray-500 text-xl">Discover Our latest colection of clothing, shoes, accessories, 
                        that are perfect, for any occasion. 
                        From casual wear to formal attire. 
                        we have everything you need to revamp your wardrobe and stay on the trend
                    </p>
                </div>
                {/* grid */}
                <div className="grid md:grid-cols-5 md:grid-rows-2 gap-5">
                    <div className="relative col-span-2 md:col-span-3 row-span-2 rounded-xl p-5 bg-gray-100">
                        <div className="w-1/2 flex flex-col gap-8 items-start">
                            <h2 className="text-4xl md:text-6xl tracking-wider">New Running Style</h2>
                            <p className="uppercase text-xl md:text-3xl">Now Available</p>
                            <button className="btn">Check Now</button>
                        </div>
                        <div className="bg-orange-600 rounded-r-3xl w-fit px-4 py-3 text-3xl uppercase tracking-wider text-white absolute top-[21px] right-[20px] rotate-90">NEW</div>
                        <div className="">
                            <img src={running} alt="" className='absolute w-[70%] md:w-[80%] bottom-0 right-0'/>
                        </div>
                        <img src={openzip} alt="" className='absolute rotate-180 w-[18%] bottom-0 left-0'/>
                    </div>

                    <div className="col-span-2 relative rounded-xl p-5 bg-gray-100">
                        <div className="w-1/2 flex flex-col gap-8 items-start">
                            <h2 className="text-4xl md:text-5xl tracking-wider">SPORTS ESSENTIALS</h2>
                            <p className="uppercase text-xl md:text-3xl">MOVE AND EXPLORE  </p>
                        </div>
                        <div className="">
                            <img src={sports} alt="" className='absolute w-[60%] bottom-0 right-0'/>
                        </div>
                        <img src={openzip} alt="" className='absolute w-[18%] top-0 right-0'/>
                    </div>

                    <div className="col-span-2 relative bg-orange-600 text-white rounded-xl p-5 flex items-center gap-3">
                        <div className="flex flex-col items-start w-1/2">
                            <h2 className="text-5xl font-bold">GET</h2>
                            <h2 className="text-5xl font-bold mb-4">10% OFF</h2>
                            <p className="font-light text-xl">For all items in our store or website</p>
                        </div>
                        <div className="w-1/2 text-[150px] flex items-center justify-center">
                            <GoNorthStar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;