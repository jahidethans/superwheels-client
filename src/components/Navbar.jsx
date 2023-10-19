
import { NavLink } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../Constants';
import { useState } from 'react';

const Navbar = () => {
    const [ toggle, setToggle] = useState(false);
    return (
        <div>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <h2 className='w-[124px] h-[32px] font-poppins font-bold text-white text-2xl' style={{ whiteSpace: 'nowrap' }}>
                    <span >Super</span> <span className='text-sky-400'>Wheels</span>
                </h2>

                <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
                    {navLinks.map((nav, index)=>(
                        <li 
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}
                        >
                            <NavLink to={`#${nav.id}`}>
                                {nav.title}
                            </NavLink>

                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu"
                    className='w-[28px] h-[28px] object-contain' 
                    onClick={()=>setToggle((prev)=> !prev )}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className='list-none flex flex-col justify-end items-center flex-1 '>
                    {navLinks.map((nav, index)=>(
                        <li 
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-10'} text-white`}
                        >
                            <NavLink to={`#${nav.id}`}>
                                {nav.title}
                            </NavLink>

                        </li>
                    ))}
                </ul>

                    </div>
                </div>


            </nav>

        </div>
    );
};

export default Navbar;