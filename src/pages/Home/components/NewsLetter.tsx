import star from '../../../assets/images/star-svg-gold.svg';
import img1 from '../../../assets/clientPhotos/RajPatel.jpeg';
import img2 from '../../../assets/clientPhotos/claradavinson.jpeg';
import img3 from '../../../assets/clientPhotos/abigailforbes.jpeg';

function NewsLetter() {
    return ( 
        <>
            <div className="max-cont my-10">
                <div className="bg-gray-100 relative w-full min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
                    <img src={star} alt="" className='w-[300px] h-[300px] absolute bottom-[-5%] left-[-35%] lg:left-[-5%] opacity-70 z-[1]'/>
                    <div className="md:w-[70%] mx-auto flex flex-col justify-center items-center gap-4 relative z-[2]">
                            <h2 className='text-3xl md:text-5xl tracking-wider font-bold text-center'>Subscribe to our news letter</h2>
                            <p className='text-gray-500 text-center text-sm'>The ultimate newsletter to get the latest updates on our products and offers for you, giving you the latest fashion trends in footwear.</p>
                            <label htmlFor="newsletter" className='w-[90%] md:w-[50%] relative'>
                                <input type="email" placeholder='Enter email address' 
                                name="newsletter" 
                                className="w-full bg-transparent focus:outline-none rounded-3xl border-2 px-4 py-3"/>
                                <button className='bg-[#EAE2C6] hover:bg-[#F4D793] duration-150 ease-linear text-white text-sm px-4 py-4 rounded-xl w-fit absolute right-0'>Submit</button>
                            </label>
                            <div className='flex items-center gap-1 text-sm'>
                                <div className='flex items-center relative mx-10'>
                                    <img src={img1} alt="" className='w-8 h-8 rounded-full relative z-[1] border-2 border-white'/>
                                    <img src={img2} alt="" className='w-8 h-8 rounded-full absolute left-[55%] z-[2] border-2 border-white'/>
                                    <img src={img3} alt="" className='w-8 h-8 rounded-full absolute left-[110%] z-[3] border-2 border-white'/>
                                </div>
                                <span className='font-bold text-md'>280K+</span>
                                <span className='text-gray-500 text-xs'>people have signed up</span>
                            </div>
                    </div>
                    <img src={star} alt="" className='w-[300px] h-[300px] absolute top-[-5%] right-[-35%] lg:right-[-5%] opacity-70 z-[1]'/>
                </div>
            </div>    
        </>
    );
}

export default NewsLetter;