import { useState } from "react"
import { FaSliders } from "react-icons/fa6";
import filledStar from '../../../assets/images/fullstar.png';
import emptyStar from '../../../assets/images/emptystar.png';
// import ProductCard from "./ProductCard";
// import products from "../../../lib/Products";
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
function ProductDisplay(){
    const [typeIndex, setTypeIndex] = useState<number>(1);
    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const [minVal, SetMinVal] = useState<number>(15000);
    const [maxVal, SetMaxVal] = useState<number>(150000);
    return (
        <>
            <div className="h-full my-10 max-cont flex flex-col gap-6 items-start justify-between">
                <h2 className="font-semibold tracking-wide capitalize text-5xl">Our Products</h2>

                {/* actions */}
                <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-0 mt-6">
                    {/* selectors */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                        {/* categories */}
                        <label htmlFor="categories">
                            <select name="cats" id="cats" className="cursor-pointer border px-3 py-2 rounded-3xl focus:outline-none">
                                <option value="Mens">Mens</option>
                                <option value="Mens">Womens</option>
                                <option value="Mens">Kids</option>
                                <option value="Mens">Sports</option>
                            </select>
                        </label>
                        {/* types */}
                        <div className="flex flex-wrap md:flex-no-wrap items-center gap-5 cursor-pointer">
                            <span 
                            className={`${typeIndex === 1 && "bg-black text-white"} duration-300 ease-in-out p-3 rounded-full`} 
                            onClick={()=> setTypeIndex(1)}>All</span>
                            <span 
                            className={`${typeIndex === 2 && "bg-black text-white"} duration-300 ease-in-out p-3 rounded-full`} 
                            onClick={()=> setTypeIndex(2)}>Sneakers</span>
                            <span 
                            className={`${typeIndex === 3 && "bg-black text-white"} duration-300 ease-in-out p-3 rounded-full`} 
                            onClick={()=> setTypeIndex(3)}>Sports</span>
                            <span 
                            className={`${typeIndex === 4 && "bg-black text-white"} duration-300 ease-in-out p-3 rounded-full`} 
                            onClick={()=> setTypeIndex(4)}>Formal</span>
                            <span 
                            className={`${typeIndex === 5 && "bg-black text-white"} duration-300 ease-in-out p-3 rounded-full`} 
                            onClick={()=> setTypeIndex(5)}>Slides</span>
                        </div>
                    </div>
                    {/* filters */}
                    <div className="relative">
                        {/* filter btn */}
                        <div 
                        onClick={()=> setFilterOpen((prevState:boolean )=> !prevState )} 
                        className="flex items-center gap-2 border rounded-3xl px-4 py-3 cursor-pointer">
                            <span>Filters </span><FaSliders />
                        </div>

                        {/* filter contol */}
                        {
                            filterOpen &&                         
                            <div 
                            className="bg-gray-100 border-2 p-2 rounded-lg flex flex-col gap-3 absolute top-[110%] left-0 md:left-[-100%] lg:left-[-50%] max-w-[300px] z-30">
                                {/* category
                                <div className="flex flex-col items-start gap-3">
                                    <h2 className="uppercase font-bold">Category</h2>
                                    <label htmlFor="filter-cat" className="flex flex-col items-start gap-1 p-2">
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Men-cat">
                                            <input 
                                            type="checkbox" 
                                            name="Men-cat" 
                                            value="Men"/>
                                            Men
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Women-cat">
                                            <input 
                                            type="checkbox" 
                                            name="Women-cat" 
                                            value="Women"/>
                                            Women
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="kids-cat">
                                            <input 
                                            type="checkbox" 
                                            name="Kids-cat" 
                                            value="Kids"/>
                                            Kids
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Sports-cat">
                                            <input 
                                            type="checkbox" 
                                            name="Sports-cat" 
                                            value="Sports"/>
                                            Sports
                                        </label>
                                    </label>
                                </div> */}

                                {/* shipped from */}
                                <div className="flex flex-col items-start gap-3">
                                    <h2 className="uppercase font-bold">Shipped From</h2>
                                    <label htmlFor="filter-shipped" 
                                    className="flex flex-col items-start gap-1 p-2">
                                        <label 
                                        htmlFor="shipped" 
                                        className="flex items-center gap-1">
                                            <input 
                                            type="checkbox" 
                                            name="shipped" 
                                            value="shipped"/>
                                            <span className="bg-blue-500 text-white text-sm uppercase whitespace-nowrap">
                                                Shipped from Abroad
                                            </span>
                                        </label>
                                    </label>
                                </div>

                                {/* Brand */}
                                <div className="flex flex-col items-start gap-3">
                                    <h2 className="uppercase font-bold">Brand</h2>
                                    <label 
                                    htmlFor="filter-brand" 
                                    className="flex flex-col items-start gap-1 p-2">
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Nike">
                                            <input 
                                            type="checkbox" 
                                            name="Nike" 
                                            value="Nike"/>
                                            Nike
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Converse">
                                            <input 
                                            type="checkbox" 
                                            name="Converse" 
                                            value="Converse"/>
                                            Converse
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Adidas">
                                            <input 
                                            type="checkbox" 
                                            name="Adidas" 
                                            value="Adidas"/>
                                            Adidas
                                        </label>
                                        <label 
                                        className="flex items-center gap-1"
                                        htmlFor="Timberland">
                                            <input 
                                            type="checkbox" 
                                            name="Timberland" 
                                            value="Timberland"/>
                                            Timberland
                                        </label>
                                    </label>
                                </div>
                                {/*PRICE  */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold">PRICE(₦)</h3>
                                        <button className="text-orange-600 font-bold">Apply</button>
                                    </div>
                                    {/* <!-- Slider --> */}
                                    <div className="">
                                        <RangeSlider 
                                        value={[minVal, maxVal]}
                                        min={5000}
                                        max={200000}
                                        step={1}
                                        onInput={(values: [number, number]) => {
                                            SetMinVal(values[0]);
                                            SetMaxVal(values[1]);
                                        }}
                                        />
                                    </div>
                                    <label htmlFor="slder-input" className="flex items-center gap-1">
                                        <input type="number" value={minVal} className="w-[80px]" 
                                        onChange={(e)=>{
                                            SetMinVal(Number(e.target.value))
                                        }}/> -
                                        <input type="number" value={maxVal} className="w-[80px]" 
                                        onChange={(e)=>{
                                            SetMaxVal(Number(e.target.value))
                                        }}/>
                                    </label>
                                </div>
                                {/* Rating */}
                                <div className="flex flex-col items-start gap-3">
                                    <h2 className="uppercase font-bold">Product Rating</h2>
                                    <label htmlFor="filter-Product" 
                                    className="flex flex-col items-start gap-1 p-2">
                                        {/* fivestar */}
                                        <label 
                                        htmlFor="fivestar" 
                                        className="flex items-center gap-1">
                                            <input 
                                            type="checkbox" 
                                            name="fivestar" 
                                            value="fivestar"/>
                                            <span className="flex items-center gap-1">
                                                <img src={filledStar} alt="" className=" w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                            </span>
                                        </label>
                                        {/* foustar */}
                                        <label 
                                        htmlFor="fourstar" 
                                        className="flex items-center gap-1">
                                            <input 
                                            type="checkbox" 
                                            name="fourstar" 
                                            value="fourstar"/>
                                            <span className="flex items-center gap-1">
                                                <img src={filledStar} alt="" className=" w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            </span>
                                        </label>
                                        {/* threestar */}
                                        <label 
                                        htmlFor="threestar" 
                                        className="flex items-center gap-1">
                                            <input 
                                            type="checkbox" 
                                            name="threestar" 
                                            value="threestar"/>
                                            <span className="flex items-center gap-1">
                                                <img src={filledStar} alt="" className=" w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            </span>
                                        </label>
                                        {/* two star */}
                                        <label 
                                        htmlFor="twostar" 
                                        className="flex items-center gap-1">
                                            <input 
                                            type="checkbox" 
                                            name="twostar" 
                                            value="twostar"/>
                                            <span className="flex items-center gap-1">
                                                <img src={filledStar} alt="" className=" w-5 h-5"/>
                                                <img src={filledStar} alt="" className="w-5 h-5"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                                <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            </span>
                                        </label>
                                        {/* onestar */}
                                        <label 
                                    htmlFor="onestar" 
                                    className="flex items-center gap-1">
                                        <input 
                                        type="checkbox" 
                                        name="onestar" 
                                        value="onestar"/>
                                        <span className="flex items-center gap-1">
                                            <img src={filledStar} alt="" className=" w-5 h-5"/>
                                            <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            <img src={emptyStar} alt="" className="w-4 h-4"/>
                                            <img src={emptyStar} alt="" className="w-4 h-4"/>
                                        </span>
                                    </label>
                                    </label>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {/* product grid */}
                {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-y-4 md:space-y-0 gap-12 content-center place-items-center my-5 min-h-min">
                    {
                        products.map((product, index)=>{
                            return(
                                <ProductCard
                                key={index}
                                imageUrls={Array.from(product.imageUrls)}
                                discountVal={product.discountVal}
                                productTitle={product.productTitle}
                                productBrand={product.productBrand}
                                productPrice={product.productPrice}
                                colors={Array.from(product.colors)}
                                />
                            )
                        })
                    }
                </div> */}
                
                <button className="btn-transparent self-center md:mt-5">See all Products</button>
            </div>
        </>
    )
}

export default ProductDisplay