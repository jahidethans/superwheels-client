import styles from '../style';

const BrandName = ({brand}) => {
    

    return (
        <div className={`${styles.flexCenter} w-[350px] h-[250px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer container mx-auto`}>
  <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-3xl relative`}>
    <img src={brand.logo} className='w-[98%] h-[97%] rounded-3xl' alt="" />
    <div className={`${styles.flexCenter} absolute inset-0 rounded-3xl opacity-0 transition-opacity bg-secondary hover:opacity-50`}>
      <span className="text-black text-4xl font-poppins font-semibold">{brand.title}</span>
    </div>
  </div>
</div>



    );
};

export default BrandName;