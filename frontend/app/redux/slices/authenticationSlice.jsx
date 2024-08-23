import {createSlice} from "@reduxjs/toolkit"

const initialState={
    authenticationStatus: false
}
const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers:{
        valid:(state, action)=>{
            state.authenticationStatus=action.payload
        },
        invalid:(state, action)=>{
            state.authenticationStatus=action.payload
        }
    }
})

export const {valid, invalid}=authenticationSlice.actions;
export default authenticationSlice.reducer;