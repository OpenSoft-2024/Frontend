import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SubscriptionPage from './Components/SubscriptionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <SubscriptionPage/>
    
  )
}

export default App
