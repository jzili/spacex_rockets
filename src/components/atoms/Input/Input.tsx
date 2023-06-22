import { useState } from 'react';
import { StyledInputWrapper, StyledIconInputDiv, StyledInput } from './styles';

function Input({
  onFilter,
  searchResults,
}: {
  onFilter: (query: string) => void;
  searchResults: number | null;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setInputValue(query);
    onFilter(query);
  };

  return (
    <StyledInputWrapper>
      <h1>SpaceX rockets </h1>
      <p>
        {searchResults !== null &&
          `${searchResults} result${searchResults === 1 ? '' : 's'}`}
      </p>
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

export default Input;
