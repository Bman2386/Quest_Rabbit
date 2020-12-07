export const getUsers = () => {
  
    return (
        $.ajax({
            url: '/api/users',
            method: 'GET'
        })
    )
}

export const getUser = userId => {
    return (
        $.ajax({
            url: `/api/users/${userId}`
        })
    )
}

export const updateUser = user => {
    return (
        $.ajax({
            url: `/api/users/${user.id}`,
            method: `PATCH`,
            data: {user}
        })
    )
}