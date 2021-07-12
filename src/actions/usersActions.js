export const addUsers = (details) => {
    return {
        type : 'ADD_USERS',
        payload : details
    }
}

export const removeUser = (id) => {
    return {
        type : 'REMOVE_USER',
        payload : id
    }
}

export const changeUserStatus = (id) => {
    return {
        type : 'CHANGE_STATUS',
        payload : id
    }
}

export const activateAll = () => {
    return {
        type : 'ACTIVATE_ALL'
    }
}

export const deactivateAll = () => {
    return {
        type : 'DEACTIVATE_ALL'
    }
}

// export const searchUser = (data) => {
//     return {
//         type : 'SEARCH_USER',
//         payload : data
//     }
// }