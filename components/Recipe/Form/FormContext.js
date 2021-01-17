import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: '',
    creator: '',
    method: 'Standard',
    coffee: 15,
    grind: 'Medium',
    water: 200,
    temperature: 95,
    time: 120,
  })

  const setFormValues = values => {
    setFormData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  return (
    <FormContext.Provider value={{ formData, setFormValues }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormData = () => useContext(FormContext)
