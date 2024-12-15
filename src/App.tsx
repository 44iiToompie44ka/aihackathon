import WebApp from '@twa-dev/sdk';
import './App.css'

function App() {
  return (    <>
    <h2>JetisuDigital AI Playground</h2>
    <div className="card">

        <UsingArrayMap />


      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <div className='expand'>
        
      <button onClick={() => WebApp.expand()}>
        expand
      </button>
      </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>)
}
const gamesList = ['List Item 1', 'List Item 2', 'List Item 3'];

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


