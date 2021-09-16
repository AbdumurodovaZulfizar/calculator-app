import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App my-5">
      <Display previousVal="" currentVal="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
