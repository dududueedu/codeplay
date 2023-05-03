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
            url: `http://localhost:27017/api/Submission`,
            data: data,
            headers: { "token": "SUBMISSION." }
        })
    )
}