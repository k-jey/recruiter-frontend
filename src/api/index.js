const API = process.env.REACT_APP_API_URL

export const signin = (user) => {
    return fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const isAuthentcated = () => {
    if (typeof window == 'undefined'){
        return false
    }
    if (localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next()
        return fetch(`${API}/signout`, {
            method: "GET"
        }).then(response => {
            console.log('signout', response)
        }).catch(err => console.log(err))
    }
}

export const getAllJobs = () => {
    // console.log(process.env.REACT_APP_API_URL)
    // console.log(API)
    return fetch(`${API}/jobsAll`, {
        method: "GET"
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const createJob = (token, job) => {
    return fetch(`${API}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(job)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}