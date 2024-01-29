import React, {useState} from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
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
    const {systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [isMobileNav, setMobileNav] = useState(false);

    return (
        <header className="w-full mx-auto px-20 md:px-4 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className='md:flex md:items-center justify-between'>
                <div>
                    <div className='md:py-5 md:block'>
                        <h2 className='text-2xl font-bold'>David Zhao</h2>
                    </div>
                </div>
                <div className='md:flex md:space-x-6'>
                    {
                        NavItems.map((item, idx) => {
                            return <a key={idx}>{item.label}</a>
                        })
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar