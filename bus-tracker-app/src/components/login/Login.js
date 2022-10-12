import { buildQueries } from '@testing-library/react'
import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel,FormWrap/* ,Icon */,Form,FormH1,Text } from './LoginElements'
import bus  from "../../pictures/bus.jpg"
export function Login() {
    return (
      <Container>
          <FormWrap>
              {/* <Icon to='/'>Quiz Warehouse</Icon> */}
              <FormContent>
                  <Form action='dashboard'>
                      <FormH1>Please enter your email and password</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required />
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required /> 
                      <FormButton type='submit'>Continue</FormButton>
                       <Text>Forgot password</Text> 
                  </Form>
              </FormContent>
            </FormWrap>
            <img src={bus} alt="bus" />;
        </Container>
        
  )
}
export default Login
