import './App.css';
import React from 'react';
import axios from 'axios';

function App() {

  const getQuote = async () => {
    let response = await axios.get('/quote-api/getquote')
    let data = response.data;
    console.log({ data })
  }

  let quote = "Not all who wander are lost";
  let author = "J.R.R.Tolkein";
  return (
    <div class="wrapper">
      <div class="container">
        <h3>QUOTE OF THE DAY!</h3>
        <p id="quote">{quote}</p>
        <h3 id="author">{author}</h3>
        <button id="btn" onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
