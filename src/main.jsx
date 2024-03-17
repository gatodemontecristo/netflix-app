import React from 'react'
import ReactDOM from 'react-dom/client'

import { NetflixApp } from './NetflixApp'
import './sass/customBoostrap.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NetflixApp />
  </React.StrictMode>,
)
