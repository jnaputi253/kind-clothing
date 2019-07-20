import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >

      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
