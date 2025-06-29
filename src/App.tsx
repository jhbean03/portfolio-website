import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Experience from './components/Experience.tsx'
import Resume from './components/Resume.tsx'
import { useState } from 'react'

const getTheme = () => {
  if (localStorage.getItem("theme") === null || localStorage.getItem("theme") === "true") {
    return true;
  } else if (localStorage.getItem("theme") === "false") {
    return false;
  } else {
    return true;
  }
}

const App = () => {
  const [theme, setTheme] = useState(getTheme());
  const [info, setInfo] = useState("home");

  console.log(theme);
  console.log(localStorage.getItem("theme"));

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
    case "experience":
      page = <Experience />
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
