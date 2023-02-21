import React, {useState} from 'react';

function LoginBtn() {
	// getter and setter for the button text state
	const [buttonText, setButtonText] = useState('Log In');

	function handleLogin() {
		if ( buttonText === 'Log In' ) {
			// if buttonText state is 'log in', update the buttonText to 'log out'
			console.log(`The current button state is: ${buttonText}`);
			setButtonText('Log Out');
		} else {
			// if button state is 'log out', update to 'log in'
			console.log(`The secondary button state is: ${buttonText}`);
			setButtonText('Log In');
		}
	}

	return (
	  <div className="example-section">
        <div>
          <h2>Login Button</h2>
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
          	{ buttonText }
          </button>
        </div>
      </div>
	)
}

export default LoginBtn;
