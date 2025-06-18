import Navbar from './components/Navbar.tsx'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? "" : "dark"}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
