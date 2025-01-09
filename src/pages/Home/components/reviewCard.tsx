import { ImQuotesLeft } from "react-icons/im";

interface ReviewCardProps{
    customerReview: string
    customerProfilePhoto: string
    customerName: string
    customerJob: string
}

function ReviewCard({customerReview, customerProfilePhoto, customerName, customerJob}:ReviewCardProps) {
    return (
        <>
            <div className="border shadow-md rounded-md p-3 w-full md:max-w-[400px] max-h-[400px] h-full flex flex-col gap-4">
                <ImQuotesLeft className="text-2xl"/>
                <p className="text-sm">{customerReview}</p>
                <div className="flex items-center gap-3">
                    <img src={customerProfilePhoto} className="w-16 h-16 rounded-full" alt="" />
                    <div className="flex flex-col gap-3">
                        <span>{customerName}</span>
                        <span>{customerJob}</span>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default ReviewCard;