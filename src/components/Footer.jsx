import styles from '../style'
import { footerLinks, socialMedia} from '../Constants'
const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                <h2 className='w-[266px] h-[72px] font-poppins font-bold text-white text-2xl' style={{ whiteSpace: 'nowrap' }}>
                    <span >Super</span> <span className='text-secondary'>Wheels</span>
                </h2>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                At superwheels, we're committed to delivering excellence in the world of car sales.Your dream car is just a click away.
                </p>
                </div>

                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {
                        footerLinks.map((footerLink)=>(
                            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                                <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white'>
                                    {footerLink.title}
                                </h4>
                                <ul className='list-none mt-4'>
                                    {footerLink.links.map((link, index)=>(
                                        <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`} >{link.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
                <p className='font-poppins font-normal text-center text-[20px] leading-[27px] text-white'>2023 SuperWheels. All rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {
                        socialMedia.map((social, index)=>(
                            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} />
                        ))
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Footer;