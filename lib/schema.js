import * as yup from 'yup'

export const schema = yup.object().shape({
  title: yup
    .string()
    .max(64, 'This title is too powerful!')
    .required('The recipe needs a name!'),
  creator: yup
    .string()
    .max(64, "That's a long name! Maybe a little too long..."),
  coffee: yup
    .number()
    .min(5, "I think we're gonna need more than that!")
    .max(50, 'Easy there, big shot!'),
  water: yup
    .number()
    .min(20, 'Not sure how that will be possible...')
    .max(300, 'What kind of Aeropress do you have?!'),
  temperature: yup
    .number()
    .min(20, 'You think an ice cube is gonna brew very well?')
    .max(100, 'Are you trying to use a pressure cooker?!'),
  time: yup
    .number()
    .min(10, 'Do you have a time machine or something?')
    .max(1800, 'Jeez, you think anyone is gonna wait that long for coffee?'),
})
