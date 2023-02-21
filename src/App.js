import './App.css';
// import HelloWorld from './HelloWorld';
import LoginBtn from './LoginBtn';
import AlertBtn from './AlertBtn';
import ListAdder from './ListAdder';

function App() {
  return (
    <div className="App">

      <LoginBtn />
      <AlertBtn initialMessage="Goodbye, cruel world!" />
      <ListAdder />

    </div>
  );
}

export default App;
