import { QUEST } from '../../config/gameConstants'

const initialState = {
    id: "(85)996511130",
    name: null,
    description: null,
    input: null,
    expectedOutput: null
}

const problemReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUEST:
            return {
                id: action.payload.problem.id,
                name: action.payload.problem.name,
                description: action.payload.problem.description,
                input: action.payload.problem.input,
                expectedOutput: action.payload.problem.expectedOutput
            }
        default: return state;
    }
};

export default problemReducer;