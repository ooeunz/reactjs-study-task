import React, { useState } from 'react';
import axios from 'axios';

import SearchInput from './components/SearchInput/SearchInput';
import SearchBtn from './components/SearchBtn/SearchBtn';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [video, setVideo] = useState<any>([]);

  const handleSubmit = async (e: any) => {
    const youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
    });

    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAY7kDFaVbdzAyIfaR6ck95tgshjf8wPzs',
        q: searchText,
      }
    });

    console.log(response);
    setVideo(response.data.items);
  };

  return (
    <div className="App">
      <SearchInput searchText={searchText} onChange={setSearchText} />
      <SearchBtn onSubmit={handleSubmit} />

    </div>
  );
};

export default App;
