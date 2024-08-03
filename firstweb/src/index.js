import React from 'react';   // refrence lene ka kaam krti hai --> core part
import ReactDOM from 'react-dom/client';  // react ka implementatin hai web pr

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));    // DOM --> tree structure --> react khud ka dom bnata hai
root.render(
  <React.StrictMode>
    <App />  // JSX ki power deta hai
  </React.StrictMode>
);

