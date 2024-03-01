import {configureStore} from '@reduxjs/toolkit'
import pianokeys from './pianokeys'

const store = configureStore({
    reducer: {
        pianokeys: pianokeys
    },
    devTools: true
})

export default store