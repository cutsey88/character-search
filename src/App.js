import { useState, useEffect } from 'react';
import { firestore } from './firebase/firebaseConfig';
import { doc, getDoc, setDoc } from "firebase/firestore";
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
  const [scorePlace, setScorePlace] = useState(null);
  const [newRanks, setNewRanks] = useState(null);

  function markFound(name) {
    setFoundPokemon(prevFound => {
      return prevFound.concat(name)
    })
  }

  async function settleScore(myScore) {
    const docRef = doc(firestore, "scores", "top-ten");
    const docSnap = await getDoc(docRef);
    let ranking = docSnap.data();
    let topScores = ranking;
    let myRank = null;

    for (let i = 0; i < 10; i++) {
      let compRank = topScores[`r${10 - i}`];
      if (compRank.score) {
        if (myScore < compRank.score) {
          if (i === 9) {
            myRank = 1;
          }
          continue;
        }
        if (myScore >= compRank.score) {
          if (i !== 0) {  
            myRank = 10 - i + 1;
          }
          break;
        }
      } else {
        if (i !== 9) {
          continue;
        }
        myRank = 1;
      }
    }

    let holderA = ['RND', myScore];
    let holderB = [];
    
    if (myRank === null) {
      setScorePlace(null);
    } else {
      for (let i = 0; i < 10; i++) {
        let currentRank = i + 1;
        if (currentRank < myRank) {
          continue;
        }
        if (currentRank >= myRank) {
          if (holderA[1]) {
            holderB[0] = topScores[`r${currentRank}`]['name'];
            holderB[1] = topScores[`r${currentRank}`]['score'];
            topScores[`r${currentRank}`]['name'] = holderA[0];
            topScores[`r${currentRank}`]['score'] = holderA[1];
            holderA[0] = holderB[0];
            holderA[1] = holderB[1];
          }
        }
      }
      
      setScorePlace(myRank);
      setNewRanks(topScores);
      //Write new ranks to firestore
      await setDoc(doc(firestore, "scores", "top-ten"), topScores);
    }
    setMenuOpen(true);
  }

  useEffect(() => {
    if (foundPokemon.length === 3) {
      setScore(timerValue);
    }
  }, [foundPokemon])

  useEffect(() => {
    if (score !== null) {
      settleScore(score);
    }
  }, [score])

  useEffect(() => {
    if (menuOpen) {
      setMenuDisplay(
        <Menu
          firstPlay={firstPlay}
          setFirstPlay={setFirstPlay}
          setMenuOpen={setMenuOpen}
          setFoundPokemon={setFoundPokemon}
          scorePlace={scorePlace}
          newRanks={newRanks}
          score={score}
          setScore={setScore}
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
