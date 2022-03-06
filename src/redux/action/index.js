import { 
    BURGER_TYPE,
    CODES_TYPE,
    FILTER_TYPE, 
    RULES_TYPE,
    THEME_DARK_TYPE,
    THEME_LIGHT_TYPE
} from "../types"

export const filterAction = payload => {
    return {
        type: FILTER_TYPE,
        payload
    }
}

export const burgerAction = payload => {
    return {
        type: BURGER_TYPE,
        payload
    }
}

export const rulesAction = payload => {
    return {
        type: RULES_TYPE,
        payload
    }
}

export const codesAction = payload => {
    return {
        type: CODES_TYPE,
        payload
    }
}

export const lightAction = () => {
    return {
        type: THEME_LIGHT_TYPE,
    }
}

export const darkAction = () => {
    return {
        type: THEME_DARK_TYPE,
    }
}