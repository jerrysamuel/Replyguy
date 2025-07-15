import { useState } from 'react'
import React from 'react'
import AppRoutes from './routes/AppRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
       <AppRoutes />
      
      </div>
    </>
  )
}

export default App
