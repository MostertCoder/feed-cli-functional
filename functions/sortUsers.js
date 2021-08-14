const sortUsers = (users) => {
    return [...users].sort((userA, userB) => {
        const nameA = userA.name.toUpperCase();
        const nameB = userB.name.toUpperCase();
    
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
}

module.exports = sortUsers;