import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Spinner,
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
import { MdCheckCircle, MdInfo, MdPerson, MdRefresh } from 'react-icons/md'

const Recipe = ({ information, instructions }) => {
  console.log('📝 ~ file: Recipe.jsx ~ line 27 ~ instructions', instructions)
  console.log('📝 ~ file: Recipe.jsx ~ line 27 ~ information', information)
  const router = useRouter()
  const bg = useColorModeValue('gray.50', 'gray.700')

  return information && instructions ? (
    <Box bg={bg} p={3} boxShadow='base' borderRadius='md'>
      <Stack spacing={4}>
        <Heading size='lg'>{informaton.title}</Heading>
        <Divider />
        <Heading size='md'>Information</Heading>
        <Table size='sm' borderRadius='md'>
          <Tbody>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdInfo} mr={2} w={5} h={5} />
                {'\tTitle'}
              </Td>
              <Td>{information.title}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdPerson} mr={2} w={5} h={5} />
                {'\tCreator'}
              </Td>
              <Td>{information.creator || 'Anonymous'}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={MdRefresh} mr={2} w={5} h={5} />
                {'\tMethod'}
              </Td>
              <Td>{information.method}</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={GiCoffeeBeans} mr={2} w={5} h={5} />
                {'\tCoffee'}
              </Td>
              <Td>{information.coffee}g</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={HiCog} mr={2} w={5} h={5} />
                {'\tGrind'}
              </Td>
              <Td>{information.grind} grind size</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={IoWaterOutline} mr={2} w={5} h={5} />
                {'\tWater'}
              </Td>
              <Td>{information.water}mL</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={FaThermometerThreeQuarters} mr={2} w={5} h={5} />
                {'\tTemperature'}
              </Td>
              <Td>{information.temperature}C</Td>
            </Tr>
            <Tr>
              <Td fontWeight='medium'>
                <Icon as={HiClock} mr={2} w={5} h={5} />
                {'\tTime'}
              </Td>
              <Td>{information.time} seconds</Td>
            </Tr>
          </Tbody>
        </Table>
        <Heading size='md'>Instructions</Heading>
        <Divider />
        <List spacing={3} pb={3} pl={2}>
          {instructions.map((step, i) => (
            <ListItem key={i}>
              <ListIcon as={MdCheckCircle} color='green.400' />
              {step}
            </ListItem>
          ))}
        </List>
        <Button
          w='40%'
          onClick={() => router.push('step2')}
          leftIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Stack>
    </Box>
  ) : (
    <Spinner />
  )
}

export default Recipe
