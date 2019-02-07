import React, { Component } from 'react';
import styled from "styled-components";

import FormComponent from "../formComponent/formComponent";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 260px;

  background: linear-gradient(180deg, #CA94FF 0%, rgba(70, 6, 134, 0.81) 100%);
`
class App extends Component {
  render() {
    return (
      <Main>
        <FormComponent />
      </Main>
    );
  }
}

export default App;
