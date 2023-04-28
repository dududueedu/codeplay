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
//observation
export function submission(data){
    return (
        axios({
            method: "POST",
            url: `http://localhost:8080/api/problem`,
            data: data,
            headers: { "token": "SUBMISSION." }
        })
    )
}