import { combineReducers } from "redux";

import chat from './chat-reducer';

const rootReducers = combineReducers({
    chat
});

export default rootReducers;