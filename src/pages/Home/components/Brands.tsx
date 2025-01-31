import nike from '../../../assets/Brands/nike.svg';
import adidas from '../../../assets/Brands/adidas.svg';
import vans from '../../../assets/Brands/vans.svg';
import converse from '../../../assets/Brands/converse.svg';
import fila from '../../../assets/Brands/fila.jpg';
import puma from '../../../assets/Brands/puma.svg';
function Brands() {
    return ( 
        <>
            <div className="max-cont my-10">
                <div className='w-full flex flex-wrap justify-center md:flex-nowrap items-center gap-4 md:justify-between'>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={nike} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={adidas} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={vans} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={converse} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={puma} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                    <div className='border border-opacity-50 shadow-sm rounded-md p-3'>
                        <img src={fila} alt="nikelogo" className='w-28 h-28 opacity-85'/>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Brands;