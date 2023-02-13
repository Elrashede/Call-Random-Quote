import logo from './logo.svg';
import './App.css';
import axios, { all } from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  const getQuote = () => {
     
    axios.get(`http://localhost:5000/quote/random`)
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      });
     console.log(data)
  };
  return (
    <div className="App">
      <h1>Random Quote</h1><br></br>
      <button
        type="submit"
        className="btn btn-primary mb-4"
       onClick={getQuote}
      >
        Get Quote
      </button>


      <table class="table table-striped">
        <thead>
          <tr>
            <th>QuoteId</th>
            <th>Quote</th>
            <th>Author</th>

          </tr>
        </thead>
        <tbody>

          <tr>
            <td>{data.quoteId}</td>
            <td>{data.quote}</td>
            <td>{data.author}</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
