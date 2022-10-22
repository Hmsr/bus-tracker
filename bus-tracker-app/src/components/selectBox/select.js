import React from 'react';
import { Container, FormButton, FormContent, FormWrap/* ,Icon */,Form,FormH1,Text, OptionWrap } from './SelectElements'
import Select from 'react-select';
import { Link } from 'react-router-dom';
export function SelectBox() {
    const Options = [
        { value: 'Station A', label: 'A' },
        { value: 'Station B', label: 'B' },
        { value: 'Station C', label: 'C' }
      ]
  
    return (
    <Container>
          <FormWrap>
              <FormContent>
                  <Form>
              <FormH1>Please select your working location</FormH1>
              <OptionWrap>
                <Select options={Options} />
                </OptionWrap>
                       <Link to="/"> <FormButton type='submit'>Continue</FormButton> </Link>
                  </Form>
              </FormContent>
            </FormWrap>
        </Container>
  );
}