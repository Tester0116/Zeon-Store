import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'

const DetailPage = () => {
  const { getFavourite, getDetailData } = useSelector(
    (store) => store.appReducer
  )

  const breadCrums = [
    { id: 0, text: 'уе' },
    { id: 1, text: 'уе' },
    { id: 2, text: 'уе' },
    { id: 3, text: 'уе' },
  ]
  console.log('====================================')
  // console.log(getDetailData)
  console.log('====================================')
  return (
    <section>
      <Header breadCrums={breadCrums} />

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
