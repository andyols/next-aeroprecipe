import { Flex } from '@chakra-ui/react'

const Container = props => (
  <Flex
    direction='column'
    grow='1'
    shrink='1'
    basis='0%'
    as='main'
    {...props}
  />
)

export default Container
