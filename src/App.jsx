
import './App.css'
import { Home } from './Home'
import {Create} from './Create'
import { Update } from './Update'

//11. Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/create' element={<Create/>} />
           <Route path='/edit/:id' element={<Update/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
