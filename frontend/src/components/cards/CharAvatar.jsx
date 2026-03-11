import { getInitials } from '../../utils/helper';

export default function CharAvatar({ fullName, width, height, style }) {
    return (
        <div
            className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} 
            flex items-center justify-center rounded-full font-bold uppercase tracking-tighter`}
        >
            {getInitials(fullName || '')}
        </div>
    );
}
