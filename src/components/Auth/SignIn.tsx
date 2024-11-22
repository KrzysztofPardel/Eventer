import {
  Container,
  Text,
  Heading,
  Input,
  Divider,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { SignInSchema } from './SchemaValidation';
import { Formik, Field, Form } from 'formik';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  // const [passwordError, setPasswordError] = useState<string | null>(null);
  // const [emailError, setEmailError] = useState<string | null>(null);
  const navigate = useNavigate();

  // const handleSignIn = async () => {
  //   if (!email || !password) {
  //     setError('Email and password are required.');
  //   } else if (!isValidElement(email)) {
  //     setEmailError('Invalid email format.');
  //   } else if (!password) {
  //   }

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     setError(error.message);
  //   } else {
  //     setEmail('');
  //     setPassword('');
  //     setError(null);
  //     navigate('/dashboard');
  //   }
  // };

  const handleSignIn = async (
    values: { email: string; password: string },
    setError: (error: string | null) => void,
  ) => {
    const { email, password } = values;
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <Container display='flex' flexDirection='column' alignItems='center'>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Sign In
      </Heading>

      <Divider />

      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          setError(null);
          try {
            const { email, password } = values;
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
              setError(error.message);
            } else {
              navigate('/dashboard');
            }
          } catch (err) {
            console.error(err);
            setError('An unexpected error occurred. Please try again');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email */}
            <Field name='email'>
              {({ field: form }: any) => {
                <FormControl isInvalid={form.errors.email && form.touched.email} my='1rem'>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>;
              }}
            </Field>

            {/* Password  */}
            <Field name='password'>
              {({ field, form }: any) => {
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' {...field} />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>;
              }}
            </Field>

            {/* General Error Message */}
            {error && (
              <Text fontSize='sm' color='red.500' py='0.5rem'>
                {error}
              </Text>
            )}

            <Button
              background='#00C7A3'
              color='white'
              fontWeight='500'
              textTransform='none'
              w='100%'
              isLoading={isSubmitting}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>

      {/* </Container> */}
      {/* <Container p='0' py='1rem'>
        <FormControl p='0' my='1rem'>
          <FormLabel>email</FormLabel>
          <Input type='email' variant='myFlushed' onChange={(e) => setEmail(e.target.value)} />
          <FormErrorMessage>{emailError}</FormErrorMessage>
        </FormControl>
        <FormControl p='0' my='1rem'>
          <FormLabel>password</FormLabel>
          <Input
            type='password'
            variant='myFlushed'
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{passwordError}</FormErrorMessage>
        </FormControl>
      </Container> */}
      <Container
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        w='75%'
        gap='2rem'
        my='1.5rem'
      >
        <Button
          border='1px solid black'
          color='black'
          fontWeight='300'
          textTransform='none'
          w='100%'
          _hover={{ background: '#D9D9D9' }}
          onClick={() => {
            setEmail('');
            setPassword('');
            setError(null);
            navigate('/');
          }}
        >
          Home
        </Button>
        <Button
          textAlign='center'
          color='black'
          fontWeight='300'
          textTransform='none'
          w='100%'
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </Container>
    </Container>
  );
};

export default SignIn;
