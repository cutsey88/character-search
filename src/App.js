import './App.css';
import Content from './components/content';
import pokePlace from './coords';
//import { getStorage, ref } from 'firebase/storage';

//const storage = getStorage();
//const gsRef = ref(storage, 'gs://character-search-be1bd.appspot.com/pokemon-coords.json');
//const obRef = JSON.parse(gsRef);

function App(props) {
  return (
    <div className="App">
      <Content coords={pokePlace} />
    </div>
  );
}

export default App;
