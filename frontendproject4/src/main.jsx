import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import Page1 from './Page1.jsx'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path='/Page1' element={<Page1/>}></Route>
</Routes>


</BrowserRouter>

)