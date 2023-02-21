import React, {useState} from 'react';

function ListAdder() {
	// getter and setter for array of all items to render as <li>s
	const [listItems, setListItems] = useState(['test', 'another', 'thing']);
	// getter and setter for single item being captured in input to eventually add to items array
	const [itemText, setItemText] = useState('');

	function handleChangeItem(evt) {
		// set the input for the individual item
		setItemText(evt.target.value);
	}

	function addItem() {
		// console.log(itemText);
		// pass setter a function expression which resolves to a value
		// setter is passed arrow func that takes in the current state
		// value returned uses the spread operator to make a copy of the current state, then adds the item to the array
		setListItems( (prevListItems) => [...prevListItems, itemText] );
		// empty item text in input for better user experience
		setItemText('');
	}

	return (
    <div className="example-section">
      <div>
        <h2>List Adder</h2>
      </div>
      <div>
        <ul id="list">
        {
          listItems.map( (item) => <li key={item}>{item}</li> )
        }
        </ul>
      </div>
      <div>
        <input type="text" onChange={handleChangeItem} value={itemText} />
        <button type="button" onClick={addItem}>
          Click to add item to the list
        </button>
      </div>
    </div>
  );
	
}

export default ListAdder;
