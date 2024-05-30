import { GET_ALL_RDV } from "../Const/rdv"


const initialState = {
    result: null,

}

export const rdvReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RDV:
            return { ...state, result: payload }
        default:
            return state
    }
}