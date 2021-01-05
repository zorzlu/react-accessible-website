import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// var xhttp = new XMLHttpRequest();
// var data = {};

fetch('/data/db.json')
  .then((r) => r.json())
  .then((data) => {
    console.log(data.events);
    ReactDOM.render(
      <StrictMode>
        <ColorModeScript />
        <App events={data.events} />
      </StrictMode>,
      document.getElementById('root')
    );
  });

// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     data = JSON.parse(xhttp.responseText);
//     ReactDOM.render(
//       <StrictMode>
//         <ColorModeScript />
//         <App appData={JSON.stringify(data)} />
//       </StrictMode>,
//       document.getElementById('root')
//     );
//   }
// };

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
