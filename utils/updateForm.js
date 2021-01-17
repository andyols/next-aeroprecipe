export default function updateForm(state, payload) {
  console.log('📝 ~ file: updateForm.js ~ line 2 ~ payload', payload)
  return {
    ...state,
    form: {
      ...state.form,
      ...payload,
    },
  }
}
