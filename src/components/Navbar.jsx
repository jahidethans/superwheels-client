
import { Link, NavLink } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../Constants';
import { useContext, useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    

    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <Link to='/'><h2 className='w-[124px] h-[32px] font-poppins font-bold text-white text-2xl' style={{ whiteSpace: 'nowrap' }}>
                    <span >Super</span> <span className='text-secondary'>Wheels</span>
                </h2></Link>

                <ul className='list-none sm:flex hidden justify-center items-center flex-1 '>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${index === navLinks.length - 1 ? 'hidden' : 'block'} text-white`}
                        >
                            <NavLink to={nav.to}>
                                {nav.title}
                            </NavLink>

                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>

                    {
                        user?.email ?
                        <div className="dropdown dropdown-bottom">
                            {
                    user.photoURL ? (
                      <img tabIndex={0} className='flex sm:hidden h-10 w-10 rounded-full mr-4' src={user.photoURL} alt={user.displayName} />
                    ) : <FaCircleUser className='text-3xl flex sm:hidden mr-4' tabIndex={0}></FaCircleUser>
                    }
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-dimWhite space-y-3 py-4 rounded-box w-[100px]">
                                <li className='font-medium'>{user.displayName}</li>
                                <Link to='/' className='btn bg-secondary px-0 py-0 rounded-sm text-black hover:bg-[#00DDE5]' onClick={logOut}>Log out</Link>
                            </ul>
                        </div>

                            :
                            <Link to='/login' className=' justify-end flex hidden mr-4'><button className='btn bg-secondary px-2 py-1 rounded-sm text-black'>Log in</button></Link>
                    }

                    <img src={toggle ? close : menu} alt="menu"
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                        <ul className='list-none flex flex-col justify-end items-center flex-1 '>

                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-10'} text-white`}
                                >
                                    <NavLink to={nav.to}>
                                        {nav.title}
                                    </NavLink>

                                </li>
                            ))}

                        </ul>

                    </div>
                </div>

                {
                    user?.email ?
                        <div className="dropdown dropdown-bottom">
                            {
                    user.photoURL ? (
                      <img tabIndex={0} className='sm:flex hidden h-10 w-10 rounded-full' src={user.photoURL} alt={user.displayName} />
                    ) : <FaCircleUser className='text-3xl sm:flex hidden' tabIndex={0}></FaCircleUser>
                    }
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-dimWhite space-y-3 py-4 rounded-box w-[100px]">
                                <li className='font-medium'>{user.displayName}</li>
                                <Link to='/' className='btn bg-secondary px-0 py-0 rounded-sm text-black hover:bg-[#00DDE5]' onClick={logOut}>Log out</Link>
                            </ul>
                        </div>


                        :

                        <Link to='/login' className=' justify-end sm:flex hidden'><button className='btn bg-secondary px-2 py-1 rounded-sm hover:bg-[#00DDE5] text-black'>Log in</button></Link>
                }


            </nav>

        </div>
    );
};

export default Navbar;