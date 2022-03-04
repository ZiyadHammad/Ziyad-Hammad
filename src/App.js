import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

// Components
import Main from "./components/Main"
import About from "./components/About"
import Blog from "./components/Blog"
import Work from "./components/Work"
import Skills from "./components/Skills"



function App() {
  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme} >
     <Routes>
        <Route exact path="/" element={<Main />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/blog" element={<Blog />} />
        <Route  path="/work" element={<Work />} />
        <Route  path="/skills" element={<Skills />} />
    </Routes>
      
    </ThemeProvider>
    
    </>
    
}

export default App
