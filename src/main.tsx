import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { route } from './App'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
