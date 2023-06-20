import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px 8px 20px;
  background-color: white;
  margin-top: 25px;
  border: none;
  border-radius: 8px;
`;

export const StyledIcon = styled.span`
  color: #d0d0d0;
`;

export const StyledInput = styled.input`
  width: 70%;
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #f5f5fa;
  padding-left: 20px;

  font-size: 1em;
  line-height: 1.5;

  /* &::placeholder {
    color: #d0d0d0;
  }*/
`;
