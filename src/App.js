import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleSliderComponent from './toggle_switch';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 300pxx;
  margin-top: 200px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <AppWrapper>
        <Container>
          <ToggleSliderComponent />
        </Container>
      </AppWrapper>
    )
  }
}