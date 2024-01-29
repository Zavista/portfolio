import React, {useState} from 'react'
import {Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { IoMenu, IoClose } from 'react-icons/io5'

interface NavItem {
    label: string;
    page: string;
  }
  
const NavItems: Array<NavItem> = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
];
  

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isMobileNav, setMobileNav] = useState(false);

    return (
        <header className={`w-full mx-auto px-4 fixed top-0 z-50 shadow ${
            theme === 'dark' ? 'bg-stone-900 border-b border-stone-600' : 'bg-white '
          }`}>
            <div className='md:flex md:items-center justify-between'>
                <div className='flex items-center justify-between py-3'> 
                    <div className='md:py-5 md:block cursor-pointer'>
                        <h2 className='text-2xl font-bold'>David Zhao</h2>
                    </div>
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"
                        onClick={() => setMobileNav(!isMobileNav)}
                    >
                        {isMobileNav ? <IoClose size={20} /> : <IoMenu size={20} />}
                    </button>
                </div>

                <div className={`md:flex items-center justify-center md:space-x-6 cursor-pointer ${isMobileNav ? "block" : "hidden"}`}>
                    {
                        NavItems.map((item, idx) => {
                            return  <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                        `block lg:inline-block text-neutral-900 hover:text-neutral-500 ${theme === 'dark' && "text-neutral-100"} md:mb-0 mb-3`
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setMobileNav(!isMobileNav)}
                                    >
                                        {item.label}
                                    </Link>
                        })
                    }
                    {
                        theme === "dark" ? (
                            <button onClick={() => setTheme("light")} className={`bg-slate-100 p-2 rounded-xl md:mb-0 mb-3`}>
                                <RiSunLine size={25} color='black'/>
                            </button>
                        ) : (
                            <button onClick={() => setTheme("dark")} className={`bg-slate-100 p-2 rounded-xl md:mb-0 mb-3`}>
                                <RiMoonLine size={25}/>
                            </button>
                        )
                    }

                </div>
            </div>
        </header>
    )
}

export default Navbar