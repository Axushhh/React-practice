import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
      return (
          <div>
              <h1>Custom App | chai</h1>
          </div>
      )
  }
  // here we tried to inject our element but failed

  // const ReactElement = {
  //     type: 'a',
  //     props: {
  //         href: 'https://google.com',
  //         target: '_blank'
  //     },
  //     children: 'Click me to visit google'
  // }
  
  // by this method we can inject by writing the whole html code
  const anotherElement = (
      <a href="https://google.com" target='_blank'>Visit google</a>
  )
  
  
  
  const anotherUser = " react working"
  
  const reactElement = React.createElement(
      'a', // type, keys
      {href: 'https://google.com',target: '_blank' }, /// ref
      'click me to visit google',
      anotherUser // evaluated expression (child/props)
  )
  
  ReactDOM.createRoot(document.getElementById('root')).render(
   
      reactElement
    
  )