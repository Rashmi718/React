import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        <div>
            <h1> custom app !!!</h1>
        </div>
    )
}

// const ReactElement = {
//   type : 'a',
//   props : {
//     href : 'https://google.com',
//     target: '_blank'
//   },
//   children : 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>
    Visit google</a>
)

const ReactElement = React.createElement(
    'a',
    {href : 'https://google.com',
    target : '_blank'
    },
    'click me to visit google'
)


createRoot(document.getElementById('root')).
render(
    <App />
)
