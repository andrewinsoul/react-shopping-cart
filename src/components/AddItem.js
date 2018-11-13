import React, { Component } from 'react';

class AddItem extends Component {
  addItem(e) {
    console.log('form submitted', e);
    e.preventDefault();

  }
  clearItem(e) {
    console.log('clear btn clicked', e);
    e.preventDefault();
  }
  render() {
    return (
      <div className='jumbotron section1'>
        <form>
          <label>
            <span>Name Of Item:</span>
            <input type='text' placeholder='Enter Name' name='name' />
          </label>
          <label>
            <span>Quantity Of Item:</span>
            <input type='text' placeholder='Enter Quantity' name='quantity' />
          </label>
          <label>
            <span>Price Of Item:</span>
            <input type='text' placeholder='Enter Price' name='price'/>
          </label>
          <div className='buttons'>
            <button onClick={this.addItem} className='btn' id='add'>Add Item </button>
            <button onClick={this.clearItem} className='btn' id='clear'>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddItem;
