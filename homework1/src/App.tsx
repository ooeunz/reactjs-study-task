import React from 'react';
import axios from 'axios';

const App = async () => {
  const getMaskList = async () => {
    axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1&perPage=500');
  }
  const a = getMaskList();
  return (

    <div className="App">
      <div>
        aaa
        {a}

      </div>
    </div>
  );
};

export default App;
