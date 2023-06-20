import { useState } from 'react';
import { StyledInputWrapper, StyledInput } from './styles';

function Input() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledInputWrapper>
      <h1>SpaceX rockets</h1>

      <StyledInput
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </StyledInputWrapper>
  );
}

export default Input;
