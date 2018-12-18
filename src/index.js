import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
const cities = require('cities');
const url = require('url');
const http = require('http');

const app = http.createServer((request, response) => {
    var city, query;
    query = url.parse(request.url, true).query;
    console.log(query);
    if (query.zipCode) city = cities.zip_lookup(query.zipCode).city;
    else city = "not found"
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`The city you are in is ${city}.`);
    response.end();
});

app.listen(3000);
serviceWorker.unregister();
