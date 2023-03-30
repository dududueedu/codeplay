export function dispatchProblem(quest, challenger) {
    return {
        type: quest,
        payload: {
            problem: challenger
        }
    }
};