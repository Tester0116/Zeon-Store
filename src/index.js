import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CollectionScreen from './App/Screens/Home/Collections/CollectionScreen'
import Categories from './App/Screens/Home/Collections/Categories'
import Favourite from './App/Components/Header/Favourite'
import DetailPage from './App/Screens/Home/DetailPage'
import SearchPage from './App/Screens/SearchPage'
import Cart from './App/Components/Header/Cart'
import Support from './App/Screens/Support'
import About from './App/Screens/About'
import Offer from './App/Screens/Offer'
import News from './App/Screens/News'
import { store } from './App/Store'
import App from './App/App'

import 'swiper/css/bundle'
import './_index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="collections" element={<CollectionScreen />} />
          <Route path="collections/categories" element={<Categories />} />
          <Route
            path="collections/categories/detailpage"
            element={<DetailPage />}
          />
          <Route path="detailpage" element={<DetailPage />} />
          <Route path="offer" element={<Offer />} />
          <Route path="searchpage" element={<SearchPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="news" element={<News />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
