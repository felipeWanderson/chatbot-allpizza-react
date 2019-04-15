import { combineReducers } from "redux";

import chat from './chat-reducer';
import watson from './watson'
const rootReducers = combineReducers({
    chat,
    watson
});

export default rootReducers;