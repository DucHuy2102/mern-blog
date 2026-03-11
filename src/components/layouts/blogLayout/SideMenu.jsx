import { useNavigate } from 'react-router-dom';
import { BLOG_NAVBAR_DATA, SIDE_MENU_DATA } from '../../../utils/data';
import { LuLogOut } from 'react-icons/lu';
import CharAvatar from '../../cards/CharAvatar';

export default function SideMenu({ isActive, igBlogMenu }) {
    const user = {
        name: 'Nguyễn Đức Huy',
        email: 'duchuytv2102@gmail.com',
        profileImage: null,
    };
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const menuItems = igBlogMenu ? BLOG_NAVBAR_DATA : SIDE_MENU_DATA;

    return (
        <div
            className='bg-white w-72 h-[calc(100vh-73px)] border border-slate-100 
        p-6 sticky top-18 z-20 flex flex-col'
        >
            {/* user profile */}
            {user && (
                <div
                    className='flex flex-col items-center bg-slate-100/30 rounded-2xl 
                p-6 mb-8 border border-slate-100'
                >
                    <div className='relative group'>
                        {user?.profileImage ? (
                            <img
                                src={user.profileImage}
                                alt='Profile'
                                className='w-20 h-20 rounded-full object-cover 
                                ring-4 ring-white shadow-md'
                            />
                        ) : (
                            <CharAvatar
                                fullName={user?.name || ''}
                                width='w-20'
                                height='h-20'
                                style='text-2xl ring-4 ring-white shadow-md bg-gradient-to-br 
                                from-slate-800 to-slate-950 text-white'
                            />
                        )}
                        <div
                            className='absolute bottom-1 right-1 w-4 h-4 
                        bg-emerald-500 border border-white rounded-full'
                        />
                    </div>

                    <div className='mt-4 text-center'>
                        <h5 className='text-slate-900 font-bold text-lg leading-tight'>
                            {user?.name}
                        </h5>
                        <p className='text-xs text-slate-500 font-medium mt-1 truncate max-w-45'>
                            {user?.email}
                        </p>
                    </div>
                </div>
            )}

            {/* navigation buttons */}
            <div className='flex-1 space-y-1'>
                {menuItems.map((item, index) => {
                    const isSelected = isActive === item.label;
                    return (
                        <button
                            key={`menu_${index}`}
                            className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl 
                                font-medium transition-all duration-200 group
                            ${
                                isSelected
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                            onClick={() => navigate(item.path)}
                        >
                            <item.icon
                                className={`text-xl ${isSelected ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-600'}`}
                            />
                            <span className='tracking-tight'>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* logout button */}
            {user && (
                <div className='pt-6 border-t border-slate-100'>
                    <button
                        className='w-full flex items-center gap-4 py-3 px-4 rounded-xl 
                        text-red-500 font-semibold hover:bg-red-50 transition-colors group'
                        onClick={handleLogout}
                    >
                        <LuLogOut className='text-xl group-hover:translate-x-1 transition-transform' />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
