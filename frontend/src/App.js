import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button className='user-button' onClick={() => navigate('/Users')}>
          Users
        </button>
      </header>
    </div>
  );
}

export default App;