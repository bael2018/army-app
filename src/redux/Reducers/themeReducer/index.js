import { THEME_DARK_TYPE, THEME_LIGHT_TYPE } from "../../types";

const initilState = {
    theme: 'dark'
}

export const themeReducer = (state = initilState , action) => {
    switch (action.type) {
        case THEME_DARK_TYPE:
            return {
                ...state,
                theme: 'dark'
            }
        case THEME_LIGHT_TYPE:
            return {
                ...state,
                theme: 'light'
            }
        default:
            return state;
    }
}