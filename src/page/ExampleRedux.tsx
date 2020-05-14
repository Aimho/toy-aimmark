import React from 'react';
import styled from 'styled-components';

import useExample from '../modules/example/useExample';

const StyledRedux = styled.div`
  input {
    font-size: 16px;
    padding: 8px;
  }
`;

function ExampleRedux() {
  const { name, onUpdateExample } = useExample();
  return (
    <StyledRedux>
      <h1>Example Redux</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => onUpdateExample(e.target.value)}
      />
      <p>입력값: {name}</p>
    </StyledRedux>
  );
}

export default ExampleRedux;
