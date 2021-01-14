const GET_RECIPES = `
  query {
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
  }
`
const CREATE_RECIPE = `
  mutation(
    $title: String!
    $creator: String!
    $method: String!
    $coffee: Int!
    $grind: String!
    $water: Int!
    $temperature: Int!
    $time: Int!
  ) {
    createRecipe(
      data: {
        title: $title
        creator: $creator
        method: $method
        coffee: $coffee
        grind: $grind
        water: $water
        temperature: $temperature
        time: $time
      }
    ) {
      title
      _id
    }
  }
`
const FIND_RECIPE = `
  query($id: ID!) {
    findRecipeByID(id: $id) {
      _id
    }
  }
`
const UPDATE_RECIPE = `
  mutation(
    $id: ID!
    $title: String!
    $creator: String!
    $method: String!
    $coffee: Int!
    $grind: String!
    $water: Int!
    $temperature: Int!
    $time: Int!
  ) {
    updateRecipe(
      id: $id,
      data: {
        title: $title
        creator: $creator
        method: $method
        coffee: $coffee
        grind: $grind
        water: $water
        temperature: $temperature
        time: $time
      }
    ) {
      _id
      title
      creator
    }
  }
`
const DELETE_RECIPE = `
  mutation($id: ID!) {
    deleteRecipe(id: $id) {
      _id
    }
  }
`

export { GET_RECIPES, FIND_RECIPE, CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE }
