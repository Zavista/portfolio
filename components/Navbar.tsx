import React, {useState} from 'react'
import Link from 'next/link'
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
        <header className={`w-full mx-auto px-20 md:px-4 fixed top-0 z-50 shadow ${
            theme === 'dark' ? 'bg-stone-900 border-b border-stone-600' : 'bg-white '
          }`}>
            <div className='md:flex md:items-center justify-between'>
                <div>
                    <div className='md:py-5 md:block cursor-pointer'>
                        <h2 className='text-2xl font-bold'>David Zhao</h2>
                    </div>
                </div>
                <div className='md:flex items-center justify-center md:space-x-6 cursor-pointer'>
                    {
                        NavItems.map((item, idx) => {
                            return <a key={idx}>{item.label}</a>
                        })
                    }
                    {
                        theme === "dark" ? (
                            <button onClick={() => setTheme("light")} className='bg-slate-100 p-2 rounded-xl'>
                                <RiSunLine size={25} color='black'/>
                            </button>
                        ) : (
                            <button onClick={() => setTheme("dark")} className='bg-slate-100 p-2 rounded-xl'>
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