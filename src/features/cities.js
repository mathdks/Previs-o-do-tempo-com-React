import { createSlice } from '@reduxjs/toolkit'

export const cityDataSlice = createSlice({
    name: 'cities',
    initialState: {
        weatherData: [],
    },
    reducers: {
        addCity: (state, content) => {
            state.weatherData.push(content.payload)
        },
    },
})

export const { addCity } = cityDataSlice.actions

export default cityDataSlice.reducer