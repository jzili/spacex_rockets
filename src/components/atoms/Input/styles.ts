import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px 8px 20px;
  background-color: white;
  margin-top: 25px;
  border: none;
  border-radius: 8px;
  align-items: center;

  h1 {
    font-weight: 500;
  }

  p {
    color: #676c7e;
    padding-right: 25px;
  }

  @media screen and (min-width: 768px) {
    p {
      padding: 0;
    }
  }
`;

export const StyledIconInputDiv = styled.div`
  width: 70%;
  font-size: 16px;
  background-color: #f5f5fa;
  border-radius: 50px;
  padding-left: 15px;

  i {
    font-size: 14px;
    color: #5a71e4;
  }
`;

export const StyledInput = styled.input`
  width: 70%;
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #f5f5fa;
  padding: 8px;

  font-size: 1em;
  line-height: 1.5;
`;
