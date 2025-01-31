import herobg from "../../../assets/images/hero_bg.png";
import openzip from '../../../assets/images/open_zip-bg.png';
import Counter from "../../../components/Counter";
function Hero(){
    return (
        <>
            <div className="max-cont flex flex-col md:flex-row items-center gap-4 md:gap-0 h-full mb-10">
                {/* hero text */}
                <div className="md:w-1/2 mt-5 h-full flex flex-col gap-12 justify-between">
                    <div className="flex flex-col gap-6 items-start">
                        <h2 className="uppercase font-semibold text-6xl">Trendy Shoes To Luxury</h2>
                        <p className="text-gray-500">Your no. 1 Shoe plug in Rivers State, Browse our affordable, quality and luxurious catalogue and see what best suits your taste. We enhance your drip.</p>
                        <button className="btn hover:bg-opacity-95 duration-200 ease-in-out">Check Now</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-5">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-4xl flex items-center"><Counter targetNumber={500} duration={2500} />+</span>
                                <span className="text-gray-500">Satisfied Customers</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-4xl flex items-center"><Counter targetNumber={30} duration={3000} />+</span>
                                <span className="text-gray-500">Trusted shoe Brands</span>
                            </div>
                        </div>
                        <div className="w-fit flex items-center relative">
                            <div className="w-10 h-10 rounded-full bg-orange-600"></div>
                            <div className="w-10 h-10 rounded-full bg-black absolute left-[50%]"></div>
                        </div>
                        <p className="text-gray-500">Best Shoes Discount <span className="font-bold text-black">40% OFF</span> all shoes</p>
                    </div>
                </div>

                {/* hero iamge */}
                <div className="w-full md:w-1/2 mt-5 min-h-[400px] md:min-h-[600px] flex items-center relative">
                    <div className="hidden md:block w-full min-h-[400px] md:min-h-[600px] bg-black bg-opacity-15 text-white rounded-xl absolute top-[-20px] right-[-20px]"/>
                    <div className="w-full min-h-[400px] md:min-h-[600px] bg-orange-600 text-white rounded-xl relative">
                        <img src={openzip} alt="" className="w-[30%] absolute top-0 right-0"/>
                        <div className="bg-black rounded-r-3xl w-fit px-4 py-3 text-3xl uppercase tracking-wider mt-10">Limited offer</div>
                        <div className="md:rotate-90 md:absolute left-[-200px] bottom-[40%] z-20 tracking-wider ml-2">MODEL: COVERSE-ALLSTAR-HIGHTOPS-STUDDED-BLACK</div>
                        <img src={herobg} alt="" className="absolute bottom-0 md:h-fit"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;