import { FaArrowsSpin } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
function Services() {
    return ( 
        <>
            <div className="max-cont flex flex-col gap-4 lg:flex-row md:items-center md:justify-between my-10">
                {/* text */}
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <h2 className="font-semibold tracking-wide capitalize text-5xl">Our Services</h2>
                    <p className="text-gray-500">
                        Discover the pinnacle of service excellence. 
                        We offer personalized shoe recommendations, fast and reliable worldwide shipping, 
                        and seamless returns to ensure your shopping experience is as luxurious as our shoes. 
                        Your satisfaction, our priority.
                    </p>
                </div>
                {/* services */}
                <div className="flex flex-col md:flex-row sitems-center gap-4">
                    <div className="lg:max-w-[250px] border rounded-md p-5 flex flex-col gap-3">
                        <FaArrowsSpin className="text-5xl font-light"/>
                        <h3 className="text-2xl font-semibold">Free Returns</h3>
                        <p className="text-gray-500">
                            Our customers can return or replace their purchases hassle-free, 
                            with our easy to use return policy.
                        </p>
                    </div>
                    <div className="lg:max-w-[250px] border rounded-md p-5 flex flex-col gap-3">
                        <IoShieldCheckmarkOutline className="text-5xl font-light"/>
                        <h3 className="text-2xl font-semibold">Secure Payment</h3>
                        <p className="text-gray-500">
                            We offer a secure checkout process that protects our customers' personal and finacial information.
                        </p>
                    </div>
                    <div className="lg:max-w-[250px] border rounded-md p-5 flex flex-col gap-3">
                        <TfiHeadphoneAlt className="text-5xl font-light" />
                        <h3 className="text-2xl font-semibold">Customer Support</h3>
                        <p className="text-gray-500">
                            Our customer support team is available to help customers with any questions or concerns they may have.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;