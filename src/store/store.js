import { configureStore } from '@reduxjs/toolkit'
import cities from '../features/cities'

export default configureStore({
    reducer: cities,
})