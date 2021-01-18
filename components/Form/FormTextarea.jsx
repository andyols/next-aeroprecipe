import { CloseIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

const FormTextarea = forwardRef((props, ref) => {
  const { id, label, error, placeholder, help, defaultValue, remove } = props
  return (
    <FormControl id={id} isInvalid={!!error}>
      <Stack isInline align='flex-end' justify='space-between'>
        <FormLabel>{label}</FormLabel>
        <IconButton
          variant='ghost'
          icon={<CloseIcon />}
          colorScheme='red'
          onClick={() => remove(id)}
        />
      </Stack>
      <Textarea
        ref={ref}
        name={id}
        label={id}
        resize='none'
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {help && <FormHelperText>{help}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
})

export default FormTextarea
