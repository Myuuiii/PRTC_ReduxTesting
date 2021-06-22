import { FETCH_USERS_FAILURE } from "./userTypes";
import { FETCH_USERS_REQUEST } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ""
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
    }
}

export default userReducer