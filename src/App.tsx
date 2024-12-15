import WebApp from '@twa-dev/sdk';
import './App.css'
import gamesList from './components/game_icon/games_list';

function App() {
  return (    <>
    <h2>JetisuDigital AI Playground</h2>
    <div className="card">
        <UsingArrayMap />
    </div>
    <div className='expand'>
        
      <button onClick={() => WebApp.expand()}>
        expand
      </button>
      </div>

  </>)
}


const UsingArrayMap = () => (
    
    <div>
      <p className='gamesArray'>
        {
            gamesList.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }
        </p>
        
    </div>
    
);
export default App


