import { BURGER_TYPE } from "../../types";

const initilState = {
    burger: false
}

export const burgerReducer = (state = initilState , action) => {
    switch (action.type) {
        case BURGER_TYPE:
            return {
                ...state,
                burger: action.payload
            }
        default:
            return state;
    }
}