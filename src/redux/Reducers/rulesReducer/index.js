import { RULES_TYPE } from "../../types";

const initilState = {
    rules: false
}

export const rulesReducer = (state = initilState , action) => {
    switch (action.type) {
        case RULES_TYPE:
            return {
                ...state,
                rules: action.payload
            }
        default:
            return state;
    }
}
