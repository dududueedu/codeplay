import axios from 'axios'

export function listProblems() {
    return (
        axios({
            method: "GET",
            url: `https://cp-game.onrender.com/api/problem`,
            headers: { "token": "all problems" }
        })
    );
}

export function submission(data){
    return (
        axios({
            method: "POST",
            url: `https://cp-codeback.onrender.com/api/submission`,
            data: data,
            headers: { "token": "SUBMISSION." }
        })
    )
}