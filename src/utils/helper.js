export const getInitials = (title) => {
    if (!title) return '';

    const words = title.trim().split(' ').filter(Boolean);
    let initials = '';
    for (let index = 0; index < Math.min(words.length, 2); index++) {
        initials += words[index][0];
    }
    return initials.toUpperCase();
};
