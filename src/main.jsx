import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/input.css'  // Important !

const element = (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <h1 className="text-3xl font-bold text-black bg-white p-5 rounded-lg shadow">
      Vinited Test
    </h1>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
