import { useState } from 'react';
import { StyledInputWrapper, StyledIconInputDiv, StyledInput } from './styles';

function Input({ onFilter }: { onFilter: (query: string) => void }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setInputValue(query);
    onFilter(query);
  };

  return (
    <StyledInputWrapper>
      <h1>SpaceX rockets</h1>
      <StyledIconInputDiv>
        <i className='fa-solid fa-magnifying-glass'></i>
        <StyledInput
          type='text'
          placeholder='Search'
          value={inputValue}
          onChange={handleInputChange}
          //onChange={(e) => setInputValue(e.target.value)}
          //onChange={(e) => setQuery(e.target.value)}
        />
      </StyledIconInputDiv>
    </StyledInputWrapper>
  );
}

export default Input;

/*import { useState, ChangeEvent } from 'react';
import { StyledInputWrapper, StyledIconInputDiv, StyledInput } from './styles';

function Input() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledInputWrapper>
      <h1>SpaceX rockets</h1>
      <StyledIconInputDiv>
        <i className='fa-solid fa-magnifying-glass'></i>
        <StyledInput
          type='text'
          placeholder='Search'
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledIconInputDiv>
    </StyledInputWrapper>
  );
}

export default Input;*/
