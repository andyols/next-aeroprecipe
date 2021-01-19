const FormWrapper = ({ children, ...props }) => {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  )
}

export default FormWrapper
