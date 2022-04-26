import { GET_REC } from "../Const/rec"

const initialState={
    result:null
}



export const recReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REC:
            return {...state,result:payload}

        
            
    
        default:
            return state
    }
}
