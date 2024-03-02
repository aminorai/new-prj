import { useState } from 'react'

import Todo from './Components/Todo'
// import InputTask from './Components/InputTask'
import Mat from './Components/Mat'
import Formlist from './Components/Formlist'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Mat></Mat> */}
   <Formlist></Formlist>

    </>
  )
}

export default App
