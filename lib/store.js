import { configureStore } from '@reduxjs/toolkit'
import { recipeReducer } from '@components/Form/reduxSlice'

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
})
