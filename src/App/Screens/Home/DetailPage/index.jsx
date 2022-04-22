import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'

const DetailPage = () => {
  const { getFavourite, getNewsData } = useSelector((store) => store.appReducer)

  return (
    <section>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </section>
  )
}

export default DetailPage
