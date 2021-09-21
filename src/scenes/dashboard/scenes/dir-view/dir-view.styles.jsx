import styled from "styled-components";

export const StyledAlert = styled.div`
  cursor: pointer;
  color: #636464;
  background-color: #fefefe;
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid grey;
  border-radius: .25rem;
  box-shadow: 2px 2px #b3b1b1;
  &:hover {
    box-shadow: 3.5px 3.5px #b3b1b1;
    color: red;
  }
`;
