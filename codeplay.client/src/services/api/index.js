import axios from 'axios'

export function listProblems() {
    return (
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_BASE_X_URL}`,
            headers: { "token": "all problems" }
        })
    );
}

export function submission(data){
    return (
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_BASE_Y_URL}`,
            data: data,
            headers: { "token": "SUBMISSION." }
        })
    )
}