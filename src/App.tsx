import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Partners from './pages/Partners'
import News from './pages/News'
import Contact from './pages/Contact'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="dich-vu" element={<Services />} />
          <Route path="doi-tac" element={<Partners />} />
          <Route path="tin-tuc" element={<News />} />
          <Route path="lien-he" element={<Contact />} />
        </Route>
      </Routes>
      <ChatBot />
    </BrowserRouter>
  )
}

export default App
