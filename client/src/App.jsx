import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import Blog from './pages/blog'
import Contact from './pages/contact'
import About from './pages/about'
import AddPage from './pages/addPage'
import Special from './pages/special'
import Details from './pages/details'
import Basket from './pages/basket'
import Wishlist from './pages/wishlist'
import BasketProvider from './context/basket'
import WishlistProvider from './context/wishlist'

function App() {

  return (
    <WishlistProvider>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/special" element={<Special />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/cart" element={<Basket />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </BasketProvider>

    </WishlistProvider>
  )
}

export default App
