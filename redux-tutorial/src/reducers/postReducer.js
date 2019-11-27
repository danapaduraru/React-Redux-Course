import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            // return new item
            // push to the items - pentru ca el de fapt in fake json api nu este adaugat, altfel doar trebuia sa returnam din nou lista
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}