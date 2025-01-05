import { useState } from "react"
import { FaShoppingBag } from "react-icons/fa";

interface ProductCardProps{
    imageUrls: string[]
    discountVal: number
    productTitle: string
    productBrand: string
    productPrice: string
    colors: string[]
}

function ProductCard({imageUrls, discountVal, productTitle, productBrand, productPrice, colors}:ProductCardProps){
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    return(
        <>
            <div className="flex flex-col gap-4 items-start relative mx-auto md:max-w-[300px] max-h-[400px] h-full w-full cursor-pointer">
                <div className="w-full h-full relative group">
                    <div className="bg-black rounded-b-3xl py-6 px-1 w-fit text-white text-2xl absolute top-0 left-5 z-20">
                        <div className="rotate-[-90deg]">-{discountVal}%</div>
                    </div>
                    <div className="w-full lg:w-[300px] h-[300px] group-hover:border-2
                        group-hover:border-purple-700 duration-300 ease-in-out overflow-hidden">
                        <img 
                        src={imageUrls[currentIndex]} 
                        alt="" 
                        className="w-full h-full group-hover:scale-125 duration-300 ease-in-out"/>
                    </div>
                    <div className="w-fit bg-white p-3 rounded-full duration-300 ease-in-out absolute opacity-0 bottom-0 right-1 group-hover:opacity-100  group-hover:bottom-5 text-xl text-gray-700"><FaShoppingBag/></div>
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                    <h2 className="text-xl capitalize font-semibold">{productTitle}</h2> 
                    <p className="text-gray-500 text-lg font-semibold">{productBrand}</p>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {colors.map((color, index)=>{
                                return(
                                    <div key={index} 
                                    onClick={()=> setCurrentIndex(index)} 
                                    style={{backgroundColor: color}}
                                    className={`w-4 h-4 border rounded-full cursor-pointer`}/>
                                )
                            })}
                        </div>
                        <span className="text-xl font-semibold tracking-wider">{productPrice}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;