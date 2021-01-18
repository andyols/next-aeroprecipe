import * as yup from 'yup'

export const TITLE_MAX = 64
export const CREATOR_MAX = 64
export const COFFEE_MAX = 50
export const WATER_MAX = 250
export const TIME_MAX = 1800
export const TEMPERATURE_MAX = 100

export const validateStep1 = yup.object().shape({
  title: yup
    .string()
    .required('The recipe needs a name!')
    .typeError('Not sure how you managed this ')
    .matches(`^[a-zA-Z0-9 ]*$`, "Let's keep this to numbers and letters please")
    .max(TITLE_MAX, 'Less than 64 characters please'),
  creator: yup
    .string()
    .typeError('Not sure how you managed this ')
    .matches(`^[a-zA-Z0-9 ]*$`, "Let's keep this to numbers and letters please")
    .max(CREATOR_MAX, 'Less than 64 characters please'),
  coffee: yup
    .number()
    .typeError('This should be a number')
    .positive("Well that's just not gonna work now is it?")
    .max(COFFEE_MAX, 'Easy there, big shot!'),
  water: yup
    .number()
    .typeError('This should be a number')
    .positive("Well that's just not gonna work now is it?")
    .max(WATER_MAX, "We don't want to spill water everywhere do we?"),
  temperature: yup
    .number()
    .typeError('This should be a number')
    .positive("Ice cubes don't brew coffee very well")
    .max(TEMPERATURE_MAX, "Let's stick to standard boiling methods"),
  time: yup
    .number()
    .typeError('This should be a number')
    .positive('Do you have a time machine or something?')
    .max(TIME_MAX, 'Jeez, you think anyone is gonna wait that long for coffee?'),
})

export const validateStep2 = yup.object().shape({
  instruction: yup.string().max(),
})
