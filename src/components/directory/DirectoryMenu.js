import React from 'react'
import MenuItem from './menu-item/MenuItem'
import './directory-menu.scss'

class DirectoryMenu extends React.Component {

  state = {
    sections: [
      {
        id: 1,
        title: 'Hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
      },
      {
        id: 2,
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
      },
      {
        id: 3,
        title: 'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
      },
      {
        id: 4,
        title: 'Womens',
        size: 'large',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
      },
      {
        id: 5,
        title: 'Mens',
        size: 'large',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
      }
    ]
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(section => {
            return (
              <MenuItem
                key={section.id}
                title={section.title.toUpperCase()}
                imageUrl={section.imageUrl}
                size={section.size}
              />
            )
          })
        }
      </div>
    )
  }
}

export default DirectoryMenu
