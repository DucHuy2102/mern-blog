import { VscLayersActive } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function BlogLogo({ openSideMenu, setOpenSideMenu }) {
    return (
        <Link to='/'>
            <div className='flex items-center gap-3 group cursor-pointer select-none'>
                {/* icon */}
                <div className='relative w-10 h-10 flex items-center justify-center'>
                    {/* hamburger icon for mobile */}
                    <div
                        onClick={() => setOpenSideMenu(!openSideMenu)}
                        className='flex md:hidden flex-col justify-between w-6 h-5 transition-all duration-300'
                    >
                        <span
                            className={`h-1 w-full bg-slate-900 rounded-full transition-all duration-300 ${openSideMenu ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`h-1 w-4 bg-cyan-500 rounded-full transition-all duration-300 ${openSideMenu ? 'opacity-0' : 'group-hover:w-full'}`}
                        />
                        <span
                            className={`h-1 w-full bg-slate-900 rounded-full transition-all duration-300 ${openSideMenu ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </div>

                    {/* desktop icon */}
                    <div
                        className='hidden md:flex relative z-10 w-9 h-9 bg-slate-950 border border-slate-700 rounded-xl items-center justify-center 
                        group-hover:border-cyan-500 group-hover:-translate-y-1 transition-all duration-300 shadow-xl'
                    >
                        <VscLayersActive className='text-slate-400 group-hover:text-cyan-400 text-xl transition-colors' />

                        <div className='absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_10px_#06b6d4]'></div>
                    </div>
                </div>

                {/* text */}
                <div className='flex flex-col border-l border-slate-200 pl-3 md:border-none md:pl-0'>
                    <h1 className='text-xl md:text-2xl font-black text-slate-950 tracking-tighter leading-none uppercase'>
                        Dev<span className='text-cyan-600 font-mono'>Root</span>
                    </h1>

                    <div className='hidden md:block h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 mt-1'></div>
                    <p className='md:hidden text-[10px] font-bold text-slate-400 uppercase tracking-widest'>
                        Menu
                    </p>
                </div>
            </div>
        </Link>
    );
}
