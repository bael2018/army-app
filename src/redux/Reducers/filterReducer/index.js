import { FILTER_TYPE } from "../../types";

const initilState = {
    filter: false
}

export const filterReducer = (state = initilState , action) => {
    switch (action.type) {
        case FILTER_TYPE:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}