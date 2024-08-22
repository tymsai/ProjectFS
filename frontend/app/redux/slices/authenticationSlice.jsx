import {createSlice} from "@reduxjs/toolkit"

const initialState={
    authenticationStatus: false
}
const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers:{
        valid:(state)=>{
            state.authenticationStatus=true
        },
        invalid:(state)=>{
            state.authenticationStatus=false
        }
    }
})

export const {valid, invalid}=authenticationSlice.actions;
export default authenticationSlice.reducer;