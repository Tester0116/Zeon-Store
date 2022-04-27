import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setSupportData } from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_index.scss'

const Support = () => {
  const dispatch = useDispatch()

  const { getSupportData } = useSelector((state) => state.appReducer)
  useEffect(() => {
    // ----- Getting About Data -----
    db.collection('Support').onSnapshot((snapshot) =>
      dispatch(setSupportData(snapshot.docs.map((doc) => doc.data())))
    )
  }, [])

  const [active, setActive] = useState(0)

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Публичная оферта' }]} />

      <div className="container">
        {Boolean(getSupportData.length !== 0) ? (
          <div className="support-container">
            <img src={getSupportData[0].img} alt="Support img" />
            <div className="support-container__block">
              <h5>Помощь</h5>
              {getSupportData[0].faq?.map((item, key) => (
                <div className="support-container__item">
                  <div className="fdrow">
                    <span>{item.question}</span>
                    <img
                      onClick={() => setActive(item.id)}
                      src={require('../../assets/arrow-up-icon.png')}
                      alt="arrow icon"
                    />
                  </div>

                  {item.id === active && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Support

// const [first, setfirst] = useState(0)
// const sendData = async () => {
//   console.log('====================================')
//   console.log(first)
//   console.log('====================================')
//   await db
//     .collection('Support')
//     .add({
//       img: 'https://clck.ru/gf4Cq',
//       id: 0,
//       faq: [
//         {
//           id: 0,
//           question: 'Как я могу заказать одежду?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question: 'Как осуществляется доставка?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question: 'Где производятся вещи?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question: 'Как будет упакован заказ?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question: 'Lorem ipsum dolor sit amet?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question:
//             'Есть ли возврат, при условии если одежда пришла не того размера?',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//         {
//           id: 0,
//           question: 'Как я могу оставить заявку на обратную связь',
//           answer:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit.',
//         },
//       ],
//     })
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e))
//   setfirst(() => first + 1)
// }
