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
    const [isMobileView, setMobileView] = useState(false);

    return (
        <header>
            <div>
                <div>
                    <div>
                        <h2>David Zhao</h2>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Navbar