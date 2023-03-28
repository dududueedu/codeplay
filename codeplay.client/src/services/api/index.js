import axios from 'axios'

export function listProblems() {
    return (
        axios({
            method: "GET",
            url: `http://localhost:8080/api/problem`,
            headers: { "token": "all problems" }
        })
    );
}