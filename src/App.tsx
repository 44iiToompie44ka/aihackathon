import './App.css'
import gamesList from './components/game_icon/games_list';

function App() {
  return (
    <>
    <div className='viewPort'>
    <header><h2>JetisuDigital AI Playground</h2></header>
      <PopularGamesList />
    </div>
    
  </>)
}


const PopularGamesList = () => (
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


