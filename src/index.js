import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CollectionScreen from './App/Screens/Home/Collections/CollectionScreen'
import Categories from './App/Screens/Home/Collections/Categories'
import DetailPage from './App/Screens/Home/DetailPage'
import Support from './App/Screens/Support'
import About from './App/Screens/About'
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
          <Route path="news" element={<News />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
