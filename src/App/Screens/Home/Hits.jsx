import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import { setDetailData, setFavourite, unSetFavourite } from '../../Store/action'
import LoadingSpinner from '../../Components/Spinner'
import { db } from '../../config/fbConfig'

import './_hits.scss'

const Hits = () => {
  const [hitLimit, sethitLimit] = useState(8)
  const dispatch = useDispatch()
  const { getFavourite, getHitData, getLoad } = useSelector(
    (store) => store.appReducer
  )

  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  const [itemId, setItemId] = useState(-1)

  const [first, setfirst] = useState(0)
  // Now you can use all slider methods like
  const sendData = async () => {
    console.log('====================================')
    console.log(first)
    console.log('====================================')
    await db
      .collection('Collections')
      .add({
        id: first,
        itemType: 'Платья',
        allData: [
          {
            id: 0,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 1,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 2,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 3,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 4,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '4000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 5,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 6,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 7,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 8,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '4750',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 9,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 10,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 11,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 12,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 13,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 14,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 15,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 16,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 17,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 18,
            new: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
          {
            id: 19,
            hit: true,
            itemType: 'Платья',
            size: '42-50',
            title: 'Вечернее платье',
            price: '1350',
            discount: '3000',
            article: 'Платье PL984/dakota',
            about:
              'За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.',
            count: 5,
            fabric: 'Полиэстер ',
            material: 'Полиэстер ',
            imgNcolors: [
              { id: 0, imgUrl: 'https://clck.ru/gM4Z6', color: '#73A39D' },
              { id: 1, imgUrl: 'https://clck.ru/gM3vc', color: '#84CC4C' },
              { id: 2, imgUrl: 'https://clck.ru/gM3z4', color: '#B5A8A1' },
              { id: 3, imgUrl: 'https://clck.ru/gM4mk', color: '#AB844A' },
              { id: 4, imgUrl: 'https://clck.ru/gLfjA', color: '#6977F0' },
              { id: 5, imgUrl: 'https://clck.ru/gM4dk', color: '#FFFFFF' },
              { id: 6, imgUrl: 'https://clck.ru/gM4aM', color: '#141414' },
            ],
          },
        ],
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e))
    setfirst(() => first + 1)
  }

  // Now you can use all slider

  return (
    <div className="hit-container">
      <h5>Хит продаж</h5>

      {getLoad ? (
        <LoadingSpinner />
      ) : (
        <div className="hit-block">
          {getHitData
            .filter((i, k) => k + 1 <= hitLimit)
            .map((item, key) => (
              <div className="hit-block__item" key={item.id}>
                <div className="hit-block__imgblock">
                  <Carousel
                    fade
                    keyboard={false}
                    controls={false}
                    interval={key === itemId ? 1000 : null}
                    pause={false}
                    indicators={key === itemId}
                  >
                    {item.imgNcolors.map((img, index) => (
                      <Carousel.Item
                        className="hit-block__swiper"
                        onMouseOver={() => setItemId(key)}
                        onMouseLeave={() => setItemId(-1)}
                        onClick={() => dispatch(setDetailData(item))}
                        key={img.id}
                      >
                        <img src={img.imgUrl} alt="img" />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={() => checkFavourite(item, key)}
                    src={
                      getFavourite?.map((i, k) => i.id).includes(item.id)
                        ? require('../../assets/filled-heart.png')
                        : require('../../assets/unfill-heart.png')
                    }
                    alt="heart-icon"
                  />
                  {item.discount && (
                    <>
                      <img
                        className="hit-block__discount-img"
                        src={require('../../assets/discount-icon.png')}
                        alt="block__discount"
                      />
                      <span className="hit-block__discount-procent">
                        {Math.round(
                          ((item.price - item.discount) / item.discount) * 100
                        )}
                        %
                      </span>
                    </>
                  )}
                </div>
                {/* ---- end img block ----- */}
                <Link to="detailpage">
                  <div
                    onClick={() => dispatch(setDetailData(item))}
                    className="hit-block__textdiv"
                  >
                    <span>{item.title}</span>
                    <div>
                      <span>{item.price} p</span>
                      {item.discount && (
                        <span className="hit-block__discount">
                          {item.discount} p
                        </span>
                      )}
                    </div>
                    <span>Размер: {item.size}</span>
                    <div className="hit-block__colorsblock">
                      {item.imgNcolors.map((color, k) => (
                        <div
                          key={k}
                          className="hit-block__color"
                          style={{ backgroundColor: color.color }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}

      <button
        onClick={
          sendData
          // () => console.log(getHitData)
          // () => sethitLimit(hitLimit + 4)
        }
        className="hit-block__morebtn"
      >
        Еще
      </button>
    </div>
  )
}

export default Hits
