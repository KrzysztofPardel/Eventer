import {
  Container,
  Text,
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormData = {
  eventTitle: string;
  category: string;
};

type WhatProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const What = ({ register, errors }: WhatProps) => {
  return (
    <Container p='2rem'>
      <Text
        fontSize={{ base: '2xl', lg: '4xl' }}
        fontWeight='200'
        textAlign='center'
        color='#00C7A3'
      >
        Step 1: What
      </Text>
      <Container>
        <FormControl isInvalid={!!errors.eventTitle}>
          <FormLabel>Event title:</FormLabel>
          <Input
            variant='myFlushed'
            placeholder="Ben's Birtday"
            {...register('eventTitle', { required: 'This field is required' })}
          />
          <FormErrorMessage>{errors.eventTitle && errors.eventTitle.message}</FormErrorMessage>

          <FormLabel paddingTop='1rem'>Category</FormLabel>
          <Select
            variant='flushed'
            {...register('category', { required: 'This field is required' })}
          >
            <option value='other' disabled>
              Example
            </option>
            <option value='other' defaultChecked>
              Other
            </option>
            <option value='family'>Family</option>
            <option value='friends'>Friends</option>
            <option value='work'>Work</option>
            <option value='charity'>Charity</option>
            <option value='church'>Church</option>
          </Select>
        </FormControl>
      </Container>
    </Container>
  );
};

export default What;
