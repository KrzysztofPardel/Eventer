import { Heading, Divider, Text } from '@chakra-ui/react';
import What from '../../components/Step1/What';
import When from '../../components/Step2/When';
import Where from '../../components/Step3/Where';
import Guests from '../../components/Step4/Guests';
import Food from '../../components/Step5/Food';
import Budget from '../../components/Step6/Budget';
import Schedule from '../../components/Step7/Schedule';
import Summary from '../../components/Summary/Summary';
import { useForm, SubmitHandler } from 'react-hook-form';

const Form = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const formValues = watch();

  const onSubmit: SubmitHandler<any> = (values: unknown) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Eventer
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <What register={register} errors={errors} />
      <When register={register} errors={errors} />
      <Where register={register} errors={errors} />
      <Guests register={register} errors={errors} />
      <Food register={register} errors={errors} />
      <Budget register={register} errors={errors} />
      <Schedule register={register} errors={errors} />
      <Summary formValues={formValues} />
    </form>
  );
};

export default Form;
