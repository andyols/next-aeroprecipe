import { createSlice } from '@reduxjs/toolkit'

const recipeSlice = createSlice({
  name: 'recipes',
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
    saveInformation: (state, action) => {
      state.information = action.payload
    },
    saveInstructions: (state, action) => {
      state.instructions = action.payload
    },
    addInstruction: (state, action) => {
      state.instructions.push('')
    },
    removeInstruction: (state, action) => {
      state.instructions.pop()
    },
  },
})

export const recipeReducer = recipeSlice.reducer

export const {
  saveInformation,
  saveInstructions,
  addInstruction,
  removeInstruction,
} = recipeSlice.actions
