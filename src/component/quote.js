import React from 'react'
import axios, { all } from "axios";
import { useEffect, useState } from "react";



function quote() {
    // const [data, setData] = useState([]);
    // var data={}

    // const getQuote = () => {
    //     axios.get(`http://localhost:5000/quote/random`)
    //         .then((response) => {
    //              console.log(response.data);
    //             // data=response.data 
    //         });
    //         // console.log(data)
    // };
    return (
        <div className="App">
            <h1>Random Quote</h1><br></br>
            <button
                type="submit"
                className="btn btn-primary mb-4"
                // onClick={getQuote}
            >
                Get Quote
            </button>


            {/* <table class="table table-striped">
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
                        <td>{data.quoteId}</td>
                    </tr>

                </tbody>
            </table> */}
        </div>
    )
}

export default quote
