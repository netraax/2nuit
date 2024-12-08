import React from 'react'
import ReactDOM from 'react-dom/client'

const element = (
  <div style={{
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{
      color: '#000000',
      fontSize: '32px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      Vinited Test
    </h1>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
