export default function updateForm(state, payload) {
  return {
    ...state,
    form: {
      ...state.form,
      ...payload,
    },
  }
}
