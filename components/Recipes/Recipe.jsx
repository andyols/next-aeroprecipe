import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Stack,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'

const Recipe = ({ recipe }) => {
  const { colorMode } = useColorMode()
  const typography = { light: 'gray.600', dark: 'gray.400' }

  return (
    <Accordion allowMultiple>
      <AccordionItem border='none'>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Text fontWeight='medium'>{recipe.title}</Text>
            {recipe.creator && (
              <Text fontSize='sm' color={typography[colorMode]}>
                {recipe.creator}
              </Text>
            )}
            <Stack direction='row' mt={2}>
              <Tag size='sm' borderRadius='full'>
                {recipe.coffee}g ☕
              </Tag>
              <Tag size='sm' borderRadius='full'>
                {recipe.grind} ⚙️
              </Tag>
              <Tag size='sm' borderRadius='full'>
                {recipe.water}mL 💧
              </Tag>
              <Tag size='sm' borderRadius='full'>
                {recipe.temperature}c 🌡️
              </Tag>
              <Tag size='sm' borderRadius='full'>
                {recipe.time}s ⏱️
              </Tag>
            </Stack>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={1}>
          <Flex justify='space-between'>
            <Button
              size='sm'
              colorScheme='teal'
              rightIcon={<ArrowForwardIcon />}
            >
              Go to Recipe
            </Button>
            <Button size='sm' colorScheme='red' leftIcon={<DeleteIcon />}>
              Delete Recipe
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Recipe
