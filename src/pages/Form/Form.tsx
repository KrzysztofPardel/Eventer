import { Heading, Divider, Text } from '@chakra-ui/react';
import What from '../../components/Step1/What';
import When from '../../components/Step2/When';
import Where from '../../components/Step3/Where';
import Guests from '../../components/Step4/Guests';
import Food from '../../components/Step5/Food';
import Budget from '../../components/Step6/Budget';
import Schedule from '../../components/Step7/Schedule';
import Summary from '../../components/Summary/Summary';
import { useForm } from 'react-hook-form';

const Form = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   // getValues,
  //   formState: { errors, isSubmitting },
  // } = useForm({
  //   // defaultValues:{
  //   //   test:"cos"
  //   // }
  // });

  return (
    <form>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Eventer
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <What />
      <When />
      <Where />
      <Guests />
      <Food />
      <Budget />
      <Schedule />
      <Summary />
    </form>
  );
};

export default Form;
