import { useState } from 'react';
import { Container, Text, Heading, Input, Divider, Button } from '@chakra-ui/react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    
    //sign in or throw error
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error:', error);
      if (error) setError(error.message);
    } else {
      console.log('User signed up:', data);
      console.log('Email:', email);
      console.log('Password:', password);
    }

    //clear inputs
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setError(null);

    //redirect
    navigate('/');
  };

  return (
    <Container>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Sign Up
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <Container p='0' py='1rem'>
        <Container p='0' my='1rem'>
          <Text>email</Text>
          <Input type='email' variant='myFlushed' onChange={(e) => setEmail(e.target.value)} />
          {error ? (
            <Text fontSize='xs' color='red' py='0.5rem'>
              {error}
            </Text>
          ) : (
            ''
          )}
        </Container>
        <Container p='0' my='1rem'>
          <Text>password</Text>
          <Input
            type='password'
            variant='myFlushed'
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? (
            <Text fontSize='xs' color='red' py='0.5rem'>
              {error}
            </Text>
          ) : (
            ''
          )}
        </Container>
        <Container p='0' my='1rem'>
          <Text>repeat password</Text>
          <Input
            type='password'
            variant='myFlushed'
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {error ? (
            <Text fontSize='xs' color='red' py='0.5rem'>
              {error}
            </Text>
          ) : (
            ''
          )}
        </Container>
      </Container>
{/* <Formik initialValues={{email: '',password: ''}}
validationSchema={SignInSchema}
onSubmit={async (values,{setSubmitting, setErrors})=>{
  setSubmitting(true);
  try{
    await handleSignup(values,(error)=>setErrors({general:error||''}));
  }
}}

>

</Formik> */}


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
          background='#00C7A3'
          color='white'
          fontWeight='500'
          textTransform='none'
          w='100%'
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
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
            setRepeatPassword('');
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
          onClick={() => navigate('/signin')}
        >
          Sign In
        </Button>
      </Container>
    </Container>
  );
};

export default SignUp;
