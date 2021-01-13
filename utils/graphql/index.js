const GET_RECIPES = `query {
  allRecipes {
    data {
      _id
      title
      creator
      method
      coffee
      grind
      water
      temperature
      time
    }
  }
}`

export { GET_RECIPES }
