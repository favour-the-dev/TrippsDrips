import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
function ClientReview() {
    return ( 
        <>
            <div className="max-cont my-10">
                {/* head */}
                <div className="w-full flex flex-wrap gap-4 md:flex-nowrap items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-4xl font-semibold tracking-wide">Hear What Our Clients Have To Say!</h2>
                        <p className="text-gray-500">Check out our shoes and find your perfect pair today</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-3 border rounded-full text-xl hover:scale-110 duration-300 ease-in-out hover:bg-gray-100"><IoIosArrowBack /></button>
                        <button className="p-3 border rounded-full text-xl hover:scale-110 duration-300 ease-in-out hover:bg-gray-100"><IoChevronForwardOutline /></button>
                    </div>
                </div>

                {/* reviews */}
                <div className="">

                </div>
            </div>    
        </>
    );
}

export default ClientReview;