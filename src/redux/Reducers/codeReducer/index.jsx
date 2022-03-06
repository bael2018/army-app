import { CODES_TYPE } from "../../types";

const initilState = {
    code: false
}

export const codesReducer = (state = initilState , action) => {
    switch (action.type) {
        case CODES_TYPE:
            return {
                ...state,
                code: action.payload
            }
        default:
            return state;
    }
}