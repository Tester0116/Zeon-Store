import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { setCategoriesData, setSearchData } from '../../Store/action'
import { getAuthFb } from '../../config/fbConfig'
import Menu from './Menu'
import './_index.scss'

const Header = ({ breadCrums, active, setActive }) => {
  const { getFavourite, getCartData, getCollectionsData } = useSelector(
    (store) => store.appReducer
  )
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [focused, setFocused] = useState(false)

  const [menuActive, setMenuActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)

  const __ItemHandler = (i) => {
    if (searchValue.length !== 0) {
      searchResult[0]['searchText'] = searchValue
      dispatch(setSearchData(searchResult[0]))
      navigate('/searchpage')
    } else setSearchValue(i.target.innerText)
  }

  const __InputKeyHandler = (e) => {
    if (e.key === 'Enter') {
      if (searchValue === '') setFocused(true)
      else if (
        !searchResult.find((person) =>
          person.itemType.toLowerCase().includes(searchValue.toLowerCase())
        )
      ) {
        searchResult['searchText'] = searchValue
        dispatch(setSearchData(searchResult))
        navigate('/searchpage')
      } else {
        searchResult[0]['searchText'] = searchValue
        dispatch(setSearchData(searchResult[0]))
        navigate('/searchpage')
      }
    }
  }

  const __SearchbtnHandler = () => {
    if (searchValue === '') setFocused(true)
    else if (
      !searchResult.find((person) =>
        person.itemType.toLowerCase().includes(searchValue.toLowerCase())
      )
    ) {
      searchResult['searchText'] = searchValue
      dispatch(setSearchData(searchResult))
      navigate('/searchpage')
    } else {
      searchResult[0]['searchText'] = searchValue
      dispatch(setSearchData(searchResult[0]))
      navigate('/searchpage')
    }
  }

  const breadCrumHandler = (crum) => {
    if (crum.text === '??????????????????') return navigate('/collections')
    if (crum.text === '??????????????????') return navigate('/collections')
    if (breadCrums.length === 3 && crum.id === 0) {
      dispatch(setCategoriesData(getCollectionsData[0]))
      navigate('/collections/categories')
      return
    }
  }

  useEffect(() => {
    const results = getCollectionsData
      ?.sort((a, b) => b.id - a.id)
      .filter((person) =>
        person.itemType.toLowerCase().includes(searchValue.toLowerCase())
      )
    setSearchResult(results)
  }, [searchValue])
  return (
    <header className="parent-block">
      <div className="full-header">
        <div className="container">
          {/* -------------------------- */}
          <div className="header-first__block">
            <div>
              <Link to="/about">
                <a>?? ??????</a>
              </Link>
              <Link to="/collections">
                <a className="mh24">??????????????????</a>
              </Link>
              <Link to="/news">
                <a>??????????????</a>
              </Link>
            </div>
            <div>
              {JSON.parse(localStorage.getItem('Token')) === null ? (
                <span onClick={getAuthFb}>dwed</span>
              ) : (
                <>
                  <span>??????: </span>
                  <a style={{ color: '#393939' }} href="tel:+996 000 00 00 00">
                    +996 000 00 00 00
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        {/* ---------- Line ---------- */}
        <div className="header-line" />
        {/* -------------------------- */}
        <div className="container">
          <div className="header-second__block">
            <Link to="/">
              <img
                width={162}
                height={70}
                alt="logo"
                src={require('../../assets/zeon-icon.png')}
              />
            </Link>
            <div className="header-second__block-inputdiv">
              <input
                className="header-second__block-input"
                placeholder="??????????"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={__InputKeyHandler}
                autoFocus={focused}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              {focused && searchResult?.length !== 0 && (
                <div
                  className="detail-block"
                  onClick={(e) => e.stopPropagation()}
                  onMouseOver={() => setFocused(true)}
                  // onMouseLeave={() => setFocused(false)}
                >
                  {searchResult
                    ?.sort((a, b) => b.id - a.id)
                    .map((i, k) => (
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={(i) => __ItemHandler(i)}
                        key={k}
                      >
                        {i.itemType}
                      </span>
                    ))}
                </div>
              )}
              <a
                className="header-second__block-inputicon"
                onClick={__SearchbtnHandler}
              >
                <img
                  width={24}
                  height={24}
                  alt="inputicon"
                  src={require('../../assets/search-icon.png')}
                />
              </a>
            </div>

            <div className="fdrow posr">
              <Link to="/favourite">
                <div className="header-second__block-favourite header-second__block-dot">
                  <div className="posr">
                    {JSON.parse(localStorage.getItem('Favourite')) !== null &&
                      JSON.parse(localStorage.getItem('Favourite')).length !==
                        0 && <span />}
                    <img
                      alt="favourite"
                      src={require('../../assets/favourite.png')}
                    />
                  </div>
                  <a>??????????????????</a>
                </div>
              </Link>
              <Link to="/cart">
                <div className="header-second__block-favourite">
                  <div className="posr">
                    {JSON.parse(localStorage.getItem('CartData')) !== null &&
                      JSON.parse(localStorage.getItem('CartData')).length !==
                        0 && <span />}
                    <img alt="cart" src={require('../../assets/cart.png')} />
                  </div>
                  <a>??????????????</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- */}
      <div className="mini-header">
        <img
          onClick={() => setMenuActive(!menuActive)}
          src={require('../../assets/burger-menu.png')}
          alt="burger-icon"
        />
        <img
          onClick={() => navigate('/')}
          src={require('../../assets/zeon-icon.png')}
          alt="logo"
        />
        <img
          onClick={() => setSearchActive(!searchActive)}
          src={require(`../../assets/${
            searchActive ? 'close-icon' : 'search-icon'
          }.png`)}
          alt="search icon"
        />
      </div>
      <div className={searchActive ? 'mini-header__search-div' : 'dn'}>
        <div className="mini-header__block">
          <input
            className="mini-header__block-input"
            placeholder="??????????"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyUp={__InputKeyHandler}
            autoFocus={focused}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {focused && searchResult.length !== 0 && (
            <div
              className="detail-block"
              onClick={(e) => e.stopPropagation()}
              onMouseOver={() => setFocused(true)}
              // onMouseLeave={() => setFocused(false)}
            >
              {searchResult
                ?.sort((a, b) => b.id - a.id)
                .map((i, k) => (
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={(i) => __ItemHandler(i)}
                    key={k}
                  >
                    {i.itemType}
                  </span>
                ))}
            </div>
          )}
          <a
            className="header-second__block-inputicon"
            onClick={__SearchbtnHandler}
          >
            <img
              width={24}
              height={24}
              alt="inputicon"
              src={require('../../assets/search-icon.png')}
            />
          </a>
        </div>
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        setModal={setActive}
      />
      {/* -------------------------- */}

      {/* ---------- Line ---------- */}
      {breadCrums && (
        <>
          <div className="header-line" />
          {/* -------------------------- */}
          <div className="breadcrumb-block">
            <span onClick={() => navigate('/')}>??????????????</span>

            {breadCrums.map((crum, key) => (
              <span onClick={() => breadCrumHandler(crum)} key={crum.id}>
                {crum.text}
              </span>
            ))}
          </div>
        </>
      )}
      {/* -------------------------- */}
    </header>
  )
}

export default Header
