import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import Reviews from "../../../lib/Reviews";
import ReviewCard from "./reviewCard";
import { useEffect, useState } from "react";

interface Review {
    customerReview: string;
    customerProfilePhoto: string[];
    customerName: string;
    customerJob: string;
}

function ClientReview() {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [currentReviewState, setCurrentReviewState] = useState<Review[]>([]);
    
    function handleReviewSlide(){
        if(currentIndex === 1){
            setCurrentReviewState(Reviews.slice(0,3))
        }else{
            setCurrentReviewState(Reviews.slice(3,6))
        }
    }
    useEffect(()=>{
        handleReviewSlide();
    }, [currentIndex])
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
                        <button onClick={()=> setCurrentIndex(1)} className="p-3 border rounded-full text-xl hover:scale-110 duration-300 ease-in-out hover:bg-gray-100"><IoIosArrowBack /></button>
                        <button onClick={()=> setCurrentIndex(2)} className="p-3 border rounded-full text-xl hover:scale-110 duration-300 ease-in-out hover:bg-gray-100"><IoChevronForwardOutline /></button>
                    </div>
                </div>

                {/* reviews */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    {
                        currentReviewState?.map((rev, index)=>{
                            return(
                                <ReviewCard
                                key={index}
                                customerReview={rev.customerReview}
                                customerProfilePhoto = {rev.customerProfilePhoto}
                                customerName = {rev.customerName}
                                customerJob = {rev.customerJob}
                                />
                            )
                        })
                    }
                </div>
            </div>    
        </>
    );
}

export default ClientReview;