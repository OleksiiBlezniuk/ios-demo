import logo from './logo.svg';
import './App.css';
import { Learn } from './learn/Learn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo"> 
          Ma
        </div>

        <div className='menu'>
          <div>
            🔥 0
          </div>
          <div>
            🔔
          </div>
          <div>
            ⚙️
          </div>
        </div>
      </header>

      <main>
        <Learn />
      </main>
    </div>
  );
}

export default App;
