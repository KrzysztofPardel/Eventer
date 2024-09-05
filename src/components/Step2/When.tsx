import {
  Container,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormData = {
  date: Date;
  startDate: Date;
  endDate: Date;
  fromTime: unknown;
  toTime: unknown;
};

type WhenProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const When = ({ register, errors }: WhenProps) => {
  const [oneDay, setOneDay] = useState<boolean>(true);

  /*
If oneDay = true then:
- One Day is checked
- Longer is unchecked 
- Date is shown
- Start/End Date are none 

If oneDay= false then: 
- One Day is unchecked
- Longer is checked
- Date is none
- Start/End Date is shown
*/

  const handleCheck = () => {};

  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 2: When
      </Text>
      <Container display='flex' justifyContent='center' gap='1rem'>
        <Checkbox
          size='md'
          p='0'
          colorScheme='blue'
          variant='circular'
          isChecked={oneDay ? true : false}
          onChange={() => setOneDay(!oneDay)}
        >
          One day
        </Checkbox>
        <Checkbox
          size='md'
          p='0'
          colorScheme='blue'
          variant='baseStyle'
          isChecked={oneDay ? false : true}
          onChange={() => setOneDay(!oneDay)}
        >
          Longer
        </Checkbox>
      </Container>
      <Container>
        <FormControl>
          <Container p='0' display='flex' flexDirection='column'>
            <Container p='0' my='1rem' display={oneDay ? 'block' : 'none'}>
              <FormLabel>Date</FormLabel>
              <Input
                variant='flushed'
                type='date'
                {...register('date', { required: 'This field is required' })}
              />
              <FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
            </Container>
            <Container my='1rem' p='0' display={oneDay === true ? 'none' : 'block'}>
              <FormLabel>Start Date</FormLabel>
              <Input
                variant='flushed'
                type='date'
                {...register('startDate', { required: 'This field is required' })}
              />
              <FormErrorMessage>{errors.startDate && errors.startDate.message}</FormErrorMessage>
            </Container>
            <Container my='1rem' p='0' display={oneDay ? 'none' : 'block'}>
              <FormLabel>End Date</FormLabel>
              <Input
                variant='flushed'
                type='date'
                {...register('endDate', { required: 'This field is required' })}
              />
              <FormErrorMessage>{errors.endDate && errors.endDate.message}</FormErrorMessage>
            </Container>
          </Container>
          <Container p='0' my='1rem'>
            <FormLabel>From</FormLabel>
            <Input
              type='time'
              variant='flushed'
              {...register('fromTime', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.fromTime && errors.fromTime.message}</FormErrorMessage>

            <FormLabel mt='1rem'>To</FormLabel>
            <Input
              type='time'
              variant='flushed'
              {...register('toTime', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.toTime && errors.toTime.message}</FormErrorMessage>
          </Container>
        </FormControl>
      </Container>
    </Container>
  );
};

export default When;
