import { useEffect, useState } from 'react';
import BlogLogo from './BlogLogo';
import { BLOG_NAVBAR_DATA } from '../../../utils/data';
import { Link } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import SideMenu from './SideMenu';

export default function BlogNavbar({ activeMenu }) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [openAuthForm, setOpenAuthForm] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenSideMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className='bg-white border border-b border-gray-200/50 backdrop-blur-[2px] 
        py-4 px-7 sticky top-0 z-50'
        >
            <div className='container mx-auto flex items-center justify-between gap-5'>
                {/* logo */}
                <BlogLogo openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />

                {/* navigation */}
                <nav className='hidden md:flex items-center gap-10'>
                    {BLOG_NAVBAR_DATA.map((item, index) => {
                        if (item?.onlySideMenu) return;
                        return (
                            <Link key={item.id} to={item.path}>
                                <li className='text-[15px] md:text-[17px] text-black font-medium list-none relative group cursor-pointer'>
                                    {item.label}
                                    <span
                                        className={`absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 transition-all duration-300 origin-left
                                            ${index == 0 ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                                    />
                                </li>
                            </Link>
                        );
                    })}
                </nav>

                {/* buttons: search & login/signup */}
                <div className='flex items-center gap-6'>
                    {/* search button */}
                    <button
                        className='hover:text-sky-500 cursor-pointer'
                        onClick={() => setOpenSearchBar(true)}
                    >
                        <LuSearch className='text-[22px]' />
                    </button>

                    {/* login/signup button */}
                    <button
                        className='flex items-center justify-center gap-3 bg-linear-to-r from-sky-500 to-cyan-500 text-xs md:text-sm
                    font-semibold text-white px-5 md:px-7 py-2 rounded-full cursor-pointer md:hover:scale-105 transition-transform duration-300'
                        onClick={() => setOpenAuthForm(true)}
                    >
                        Login / Signup
                    </button>
                </div>

                {/* menu for mobile */}
                {openSideMenu && (
                    <div
                        className='fixed top-18 -ml-7 bg-white'
                        onClick={() => setOpenSideMenu(false)}
                    >
                        <SideMenu activeMenu={activeMenu} igBlogMenu />
                    </div>
                )}
            </div>
        </div>
    );
}
