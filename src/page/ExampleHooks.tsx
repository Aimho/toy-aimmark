import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInputs";

const StyledHooks = styled.div`
  input {
    font-size: 16px;
    padding: 8px;
  }
`;

function ExampleHooks() {
  const exampleInput = useInput();
  return (
    <StyledHooks>
      <h1>Example Hooks</h1>
      <input type="text" {...exampleInput} />
      <p>입력값: {exampleInput.value}</p>
    </StyledHooks>
  );
}

export default ExampleHooks;
