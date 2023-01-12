import React from 'react'

import { Paragraph, Button } from 'goldennctlmn'
import 'goldennctlmn/dist/index.css'

const App = () => {
  return (
    <>
    <Paragraph text="Create React Library Example 😄" />
    <Button text='Click' onClick={() => alert('Golden')}/>
    </>
  )
}

export default App
