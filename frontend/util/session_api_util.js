export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
)

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)

// API UTILS TO TALK TO BACKEND

// export const postUser = user => (
//     $.ajax({
//         url: "/api/users",
//         method: "POST",
//         data: { user }
//     })
// )

// export const postSession = user => (
//     $.ajax({
//         url: "/api/session",
//         method: "POST",
//         data: { user }
//     })
// )

// export const deleteSession = () => (
//     $.ajax({
//         url: "/api/session",
//         method: "DELETE",
//     })
// )