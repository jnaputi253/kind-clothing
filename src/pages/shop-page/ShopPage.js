import React from 'react'
import './../../components/collection-preview/CollectionPreview'
import { shoppingListData } from './shoppingListData'
import CollectionPreview from './../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component {

  state = {
    collections: shoppingListData
  }

  render() {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {
          collections.map(collection => (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
