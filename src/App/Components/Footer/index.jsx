import React from 'react'

import './index.scss'

function Footer() {
  return (
    <section className="footer-block">
      <div className="container">
        {/* -------------------------- */}
        <div className="footer-block__colums">
          <img
            width={243}
            height={107}
            src={require('../../assets/zeon-footer-icon.png')}
            alt="logo"
          />
          <div className="footer-block__colums-links">
            <div>
              <span>test</span>
              <ul>
                <li>kh</li>
                <li>kh</li>
                <li>kh</li>
              </ul>
            </div>
            <div>
              <span>test</span>
              <ul>
                <li>kh</li>
                <li>kh</li>
                <li>kh</li>
              </ul>
            </div>
            <div>
              <span>test</span>
              <ul>
                <li>kh</li>
                <li>kh</li>
                <li>kh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
