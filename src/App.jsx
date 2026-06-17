import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import CaseStudy from './pages/CaseStudy/CaseStudy'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Work from './pages/Work/Work'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
const Insights = () => <div style={{paddingTop: "100px", paddingLeft: "5%"}}><h1>Insights</h1></div>;

function App() {
  // Initialize Lenis smooth scrolling globally
  useLenis()

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
