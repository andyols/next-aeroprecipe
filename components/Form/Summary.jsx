import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Stack,
  Table,
  Tbody,
  Td,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaThermometerThreeQuarters } from 'react-icons/fa'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiClock, HiCog } from 'react-icons/hi'
import { IoWaterOutline } from 'react-icons/io5'
import {
  MdCheckCircle,
  MdEdit,
  MdInfo,
  MdPerson,
  MdRefresh
} from 'react-icons/md'
import { useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'

const Summary = () => {
  const router = useRouter()
  const queryCache = useQueryClient()
  const recipe = useSelector(state => state.recipe)
  const bg = useColorModeValue('gray.50', 'gray.700')

  /**
   * TODO: restructure backend to match what the frontend will submit
   *       now that the recipe data is more complex with the introduction
   *       of recipe instructions and redux state management
   */
  // const create = useMutation(createRecipe)
  // const update = useMutation(updateRecipe)
  // const isLoading = create.isLoading || update.isLoading
  // const submit = async data => {
  //   props.recipe
  //     ? await update.mutateAsync({ ...data, id: recipe.id })
  //     : await create.mutateAsync(data)
  //   queryCache.invalidateQueries('recipes')
  //   router.push('/')
  // }

  return (
    <Box bg={bg} p={3} boxShadow='base' borderRadius='md'>
      <Stack spacing={4}>
        <Heading size='lg'>Recipe Summary</Heading>
        <Divider />
        <Stack isInline align='center'>
          <Heading size='md'>Information</Heading>
          <IconButton
            variant='ghost'
            icon={<MdEdit />}
            onClick={() => router.push('step1')}
          />
        </Stack>
        <Table size='sm' borderRadius='md'>
          <Tbody>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdInfo} mr={2} w={5} h={5} />
                {'\tTitle'}
              </Td>
              <Td>{recipe.information.title}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdPerson} mr={2} w={5} h={5} />
                {'\tCreator'}
              </Td>
              <Td>{recipe.information.creator || 'Anonymous'}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdRefresh} mr={2} w={5} h={5} />
                {'\tMethod'}
              </Td>
              <Td>{recipe.information.method}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={GiCoffeeBeans} mr={2} w={5} h={5} />
                {'\tCoffee'}
              </Td>
              <Td>{recipe.information.coffee}g</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={HiCog} mr={2} w={5} h={5} />
                {'\tGrind'}
              </Td>
              <Td>{recipe.information.grind} grind size</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={IoWaterOutline} mr={2} w={5} h={5} />
                {'\tWater'}
              </Td>
              <Td>{recipe.information.water}mL</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={FaThermometerThreeQuarters} mr={2} w={5} h={5} />
                {'\tTemperature'}
              </Td>
              <Td>{recipe.information.temperature}C</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={HiClock} mr={2} w={5} h={5} />
                {'\tTime'}
              </Td>
              <Td>{recipe.information.time} seconds</Td>
            </Tr>
          </Tbody>
        </Table>
        <Stack isInline align='center'>
          <Heading size='md'>Instructions</Heading>
          <IconButton
            variant='ghost'
            icon={<MdEdit />}
            onClick={() => router.push('step2')}
          />
        </Stack>
        <Divider />
        <List spacing={3} pb={3} pl={2}>
          {recipe.instructions.map((step, i) => (
            <ListItem key={i}>
              <ListIcon as={MdCheckCircle} color='green.400' />
              {step}
            </ListItem>
          ))}
        </List>
        <Stack isInline pt={2} justify='space-between'>
          <Button
            w='40%'
            onClick={() => router.push('step2')}
            leftIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
          <Button w='40%' colorScheme='green' type='submit'>
            Create!
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Summary
