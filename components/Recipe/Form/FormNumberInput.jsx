import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberInput,
  InputGroup,
  InputRightAddon,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const FormNumberInput = forwardRef((props, ref) => {
  const { id, label, error, help, addon, min, max, step } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <NumberInput
          w='100%'
          min={min}
          max={max}
          step={step}
          clampValueOnBlur={false}
        >
          <NumberInputField ref={ref} name={id} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {addon && <InputRightAddon children={addon} />}
      </InputGroup>
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default FormNumberInput
