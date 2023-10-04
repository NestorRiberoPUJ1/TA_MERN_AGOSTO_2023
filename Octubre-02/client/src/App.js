
import './App.css';
import Trino from './components/Trino/Trino';

function App() {
  return (
    <div className="App">
      <Trino user="Nestor" value="Estamos aprendiendo React" logo="https://mario.nintendo.com/static/f350c31adcd6378b913f7660db299714/7e15c/mario.png" />
      <hr></hr>
      <Trino user="Gian" value="React está interesante" logo="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png" />
      <hr></hr>
      <Trino user="David" value="Me gustan más los componentes funcionales" logo="https://mario.wiki.gallery/images/8/89/MPS_Toad_Artwork.png" />
      <hr></hr>
    </div>
  );
}

export default App;
