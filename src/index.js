import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStoreHook, Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Collections from './App/Screens/Collections'
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
          <Route path="about" element={<About />} />
          <Route path="collections" element={<Collections />} />
          <Route path="news" element={<News />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
