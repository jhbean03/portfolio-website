import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Coursework from './components/Coursework.tsx'
import Resume from './components/Resume.tsx'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState(true);
  const [info, setInfo] = useState("home");

  if (theme) {
    document.getElementsByTagName("body")[0].className = "bg-slate-100"
  } else {
    document.getElementsByTagName("body")[0].className = "bg-slate-900"
  }

  let page;
  switch (info) {
    case "home":
      page = <Home />;
      break;
    case "about":
      page = <About />
      break;
    case "skills":
      page = <Skills />
      break;
    case "projects":
      page = <Projects />
      break;
    case "coursework":
      page = <Coursework />
      break;
    case "resume":
      page = <Resume />
      break;
  }

  return (
    <div className={`${theme ? "" : "dark"} text-[20px]`}>
      <Navbar theme={theme} setTheme={setTheme} setInfo={setInfo}/>
      {page}
    </div>
  )
}

export default App
