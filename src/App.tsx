import WebApp from '@twa-dev/sdk';
import './App.css'
import gamesList from './components/game_icon/games_list';

function App() {
  return (    <>
    <header>    <h2>JetisuDigital AI Playground</h2>    </header>
    <div className="card">
        <UsingArrayMap />
    </div>
    

      
  </>)
}


const UsingArrayMap = () => (
    
    <div>
      <h3 className='popularHeader'>Популярное</h3>
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


