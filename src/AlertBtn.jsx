import React, {useState} from 'react';

function AlertBtn(props) {

  // props is an object, we could save items in props to variables
  // let initMsg = props.initialMessage;

  // text we will alert to user
  // getter and setter for the alert text state
  const [alertToShow, setAlertToShow] = useState('');

  function handleMessageChange(evt) {
    // console.log(evt);
    // console.log(evt.target);
    // grab the curr value of the input, set the alert text to that value
    setAlertToShow(evt.target.value);
  }

  function handleAlertClick(evt) {
    // console.log(evt);
    alert(alertToShow);
    // console.log(alertToShow);
    // clear alert text state so UI is updated once alert message pops up
    setAlertToShow('');
  }

  return (
    <div className="example-section">
      <div>
        <h2>Alert Button</h2>
      </div>
      <div>
        <h4>{alertToShow}</h4>
      </div>
      <div>
        <input type="text" placeholder={props.initialMessage} onChange={handleMessageChange} value={alertToShow} />
        <button type="button" onClick={handleAlertClick}>
          Click to send the alert
        </button>
      </div>
    </div>
  );
}

export default AlertBtn;
