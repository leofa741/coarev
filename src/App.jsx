import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { HomeComponent } from './components'
import { RoutesComponet } from './router/RoutesComponet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutesComponet />
    </>
  )
}

export default App
