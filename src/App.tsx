import './App.css'
import gamesList from './components/games_list/lists/games_list';
import newGamesList from './components/games_list/lists/new_games_list';

function App() {
  return (
    <>
    <header><h2>JetisuDigital AI Playground</h2></header>
      <PopularGamesList />
      <NewGamesList />

    <h2>
      Что это?
    </h2>
    <hr></hr>
    <p>Jetisu Digital AI Playground - Площадка, с ИИ ≪Опытами≫. <br></br>Мы подобрали для вас самые интересные способы использования ИИ</p>
  </>)
}


const PopularGamesList = () => (
    <div>
      <h3 className='categoryHeader'>Популярное</h3>
        <p className='gamesArray'>
        {
            gamesList.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }
        </p>
    </div>  
);
const NewGamesList = () => (
  <div>
    <h3 className='categoryHeader'>Новое для Вас</h3>
      <p className='gamesArray'>
      {
          newGamesList.map((item, index) => (
              <div key={index}>{item}</div>
          ))
      }
      </p>
  </div>  
);
export default App


