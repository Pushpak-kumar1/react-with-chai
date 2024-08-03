import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"  // directly call jsx
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// Ye run nhi hoga b/c of its syntax

// const reactElement = {  // react element ko dekhta kaise hai
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)



const anotherUser = "chai k sath react"  // VAriable

const reactElement = React.createElement(       // WITHOUT KEY values de skte hai yaha
    'a',                                               // predefined syntax --> 1st param. = Any TAG
    {href: 'https://google.com', target: '_blank' },  // Object = it'll add attributes 
    'Click me to hover google',                       // direct text
    anotherUser                 // tree create hone k baad variable inject hote hai
)

ReactDOM.createRoot(document.getElementById('root')).
render(
 
  reactElement

)
