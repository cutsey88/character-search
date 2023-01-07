import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/menu';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {

  const [firstPlay, setFirstPlay] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuDisplay, setMenuDisplay] = useState(
    <Menu
      firstPlay={firstPlay}
      setFirstPlay={setFirstPlay}
      setMenuOpen={setMenuOpen}
    />
  );
  const [foundPokemon, setFoundPokemon] = useState([]);
  const [timerValue, setTimerValue] = useState(0);
  const [score, setScore] = useState(null);

  function markFound(name) {
    setFoundPokemon(prevFound => {
      console.log(`You found ${name}`)
      return prevFound.concat(name)
    })
  }

  useEffect(() => {
    if (foundPokemon.length === 3) {
      console.log(timerValue);
      setScore(timerValue);
      setMenuOpen(true);
      console.log("You found us all");
    }
  }, [foundPokemon])

  useEffect(() => {
    if (menuOpen) {
      setMenuDisplay(
        <Menu
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
          setMenuOpen={setMenuOpen}
          setFoundPokemon={setFoundPokemon}
        />
      )
    } else {
      setMenuDisplay(null);
    }
  }, [menuOpen, firstPlay])

  useEffect(() => {
    if (!menuOpen) {
      const timer = setInterval(() => {
        setTimerValue(prevTimerVal => {
          return prevTimerVal + 1
        })
      }, 1000);
      
      return () => {
        clearInterval(timer);
        setTimerValue(0);
      }
  }
  }, [menuOpen])

  if (menuOpen) {
    return (
      <div className="App menu-open">
        {menuDisplay}
        <Header timer={timerValue} />
        <Content markFound={markFound} foundPokemon={foundPokemon} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      {menuDisplay}
      <Header timer={timerValue} />
      <Content markFound={markFound} foundPokemon={foundPokemon} />
      <Footer />
    </div>
  );
}

export default App;
