import WebApp from '@twa-dev/sdk';
import './App.css'
import GameIcon from './components/game_icon/game_icon';

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
const gamesList = [GameIcon("https://preview.redd.it/gawr-gura-by-donnami-v0-sm167kcbd4xc1.jpeg?width=1080&crop=smart&auto=webp&s=67103e61039369e790ccda078a402b2f7ef93c78", 'title1'), 'List Item 2', 'List Item 3'];

const UsingArrayMap = () => (
    
    <div>
        {
            gamesList.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }
    </div>
);
export default App


