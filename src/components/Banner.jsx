import styles from '../style';
import { discount, bannerCar } from '../assets';
import BuyNow from './BuyNow';

const Banner = () => {
  return (
    <section id='home' className={`flex md:flex-row  flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>10%</span> Discount On {" "}
          <span className='text-white'>First</span> Purchase.
            
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[53px] text-white ss:leading-[100px] leading-[75px]'>Get Your <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Dream</span>{" "}
            </h1> 
            <div className='ss:flex hidden md:mr-4 mr-0'>
                <BuyNow></BuyNow>
            </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Car Now</h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Discover a World of Wheels! Explore a curated selection of premium cars from leading manufacturers. Find your dream ride at our car dealership today.</p>

      </div>

      <div className={`flex-1 flex justify-end md:my-0 my-10 relative`}>
        <img src={bannerCar} alt="cars" className='w-[80%] h-[90%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

      </div>

<div className={`ss:hidden ${styles.flexCenter}`}>
 <BuyNow></BuyNow>
</div>

    </section>
  );
};

export default Banner;
