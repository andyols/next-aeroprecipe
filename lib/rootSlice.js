import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',

  initialState: {
    information: {
      title: '',
      creator: '',
      method: 'Standard',
      coffee: 15,
      grind: 'Medium',
      water: 200,
      temperature: 98,
      time: 120,
    },
    instructions: [''],
  },

  reducers: {
    setInformation: (state, action) => {
      state.information = action.payload
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload
    },
  },
})

export const reducer = rootSlice.reducer

export const { setInformation, setInstructions } = rootSlice.actions
