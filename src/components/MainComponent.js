import React, { Component } from 'react';
import AddItem from './AddItem';
import DisplayTotal from './DisplayTotal';
import { ItemList } from './ItemList';
import ItemsAndTotal from '../database';

const items = ItemsAndTotal[0]
const total = ItemsAndTotal[1];

class MainComponent extends Component {
  render() {
    const ItemArray = items.map((item) => {
      <ItemList
        key={'item-' + item.id}
        sN={item.id}
        itemName={item.name}
        itemQty={item.quantity}
        itemPrice={item.price}
      />
    });
    return (
      <main>
        <AddItem/>
        <div className='section2'>
          <DisplayTotal total={total}/>
          {ItemArray}
        </div>
      </main>
    );
  }
}
export default MainComponent;
