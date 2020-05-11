import React from 'react';

interface InputBoxProps {
  searchText: string,
  onChange: (data: string) => void,
}

const SearchInput: React.FC<InputBoxProps> = (props) => {
  const { searchText, onChange } = props;

  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <input type="text" onChange={handleChange} value={searchText}></input>
  );
};

export default SearchInput;