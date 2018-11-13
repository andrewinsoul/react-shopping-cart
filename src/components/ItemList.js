import React, { Component } from 'react';
// import ItemsAndTotal from '../database';

export class ItemList extends Component {
  render() {
    return (
        <div>
          <div id='header'>
            <span>S/N</span>
            <span className='table-header'>name of item</span>
            <span className='table-header'>quantity of item</span>
            <span className='table-header' scope='col'>price of item</span>
          </div>
          <div>
            <span>{this.props.sN}</span>
            <span>{this.props.itemName}</span>
            <span>{this.props.itemQty}</span>
            <span>{this.props.itemPrice}</span>
          </div>
        </div>
    );
  }
}