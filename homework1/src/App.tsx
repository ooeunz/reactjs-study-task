import React, { useState } from 'react';
import axios from 'axios';

import SearchInput from './components/SearchInput/SearchInput';
import SearchBtn from './components/SearchBtn/SearchBtn';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = async () => {
    const data = await axios.get('naver.com');
    console.log(data);

  };

  return (

    <div className="App">
      <SearchInput searchText={searchText} onChange={setSearchText} />
      <SearchBtn onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
