import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import {AnimatePresence, motion} from "framer-motion"
import Sound from "./subComponents/Sound"
// Components
import Main from "./components/Main"
import About from "./components/About"
import Blog from "./components/Blog"
import Work from "./components/Work"
import Skills from "./components/Skills"



function App() {
  const location = useLocation()

  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme} >

      <Sound />
      <AnimatePresence exitBeforeEnter>
     <Routes location={location} key={location.pathname} >
        <Route exact path="/" element={<Main />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/blog" element={<Blog />} />
        <Route  path="/work" element={<Work />} />
        <Route  path="/skills" element={<Skills />} />
    </Routes>
    </AnimatePresence>
    </ThemeProvider>

    
    </>
    
}

export default App
