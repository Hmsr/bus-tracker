import React from 'react';
import { Container, FormButton, FormContent, FormWrap/* ,Icon */,Form,FormH1,Text, OptionWrap } from './SelectElements'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { fetchStationList } from '../../AppApi';
export function SelectBox() {
    const Options = [];
  
    fetchStationList.then(response => {
      response.map(station => {
        Options.push({ value: station.stationID, label: station.name })
      }) 
    })
 
  
    return (
    <Container>
          <FormWrap>
              <FormContent>
                  <Form>
              <FormH1>Please select your working location</FormH1>
              <OptionWrap>
                <Select options={Options}
                defaultValue={{ label: "Select Station", value: 0 }}
                
                />
                </OptionWrap>
                       <Link to="/"> <FormButton type='submit'>Continue</FormButton> </Link>
                  </Form>
              </FormContent>
            </FormWrap>
        </Container>
  );
}