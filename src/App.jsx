import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import { inputAdornmentClasses } from '@mui/material/InputAdornment'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}


export default App;

