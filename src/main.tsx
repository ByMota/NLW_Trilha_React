import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <App />
    <Toaster richColors/>
  </React.StrictMode>,
)
