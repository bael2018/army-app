import { createStore , combineReducers } from "redux";
import { burgerReducer } from "./Reducers/burgerReducer";
import { codesReducer } from "./Reducers/codeReducer";
import { filterReducer } from "./Reducers/filterReducer";
import { rulesReducer } from "./Reducers/rulesReducer";
import { themeReducer } from './Reducers/themeReducer'

const rootReducer = combineReducers({
    fill: filterReducer,
    burger: burgerReducer,
    rule: rulesReducer,
    qr: codesReducer,
    backGround: themeReducer
})

export const store = createStore(rootReducer)