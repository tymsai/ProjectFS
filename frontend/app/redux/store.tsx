import {configureStore} from '@reduxjs/toolkit'
import authenticationReducer from './slices/authenticationSlice'
const store = configureStore({
    reducer:{
        authenticationStatus: authenticationReducer
    },
    devTools: true,
})

export default store;