import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";
import formatTime from '../timerFormatter';

function ReplayMenu(props) {
    
    const [nameSubmitted, setNameSubmitted] = useState(false);
    const [newName, setNewName] = useState(null);

    async function submitName() {
        let name = document.getElementById('name-input').value.toUpperCase();
        const rankingRef = doc(firestore, "scores", "top-ten");
        await updateDoc(rankingRef, {
            [`r${props.scorePlace}`]: {
                name: name,
                score: props.score,
            }
        })
        setNameSubmitted(true);
        setNewName(name);
    }

    function replayGame() {
        props.setFoundPokemon([]);
        props.setScore(null);
        props.setMenuOpen(false);
    }

    function convertRanks(ranks) {
        let result = [];
        for (let i = 0; i < 10; i++) {
            result.push(ranks[`r${i + 1}`]);
        }
        return result;
    }

    let rankArray = convertRanks(props.newRanks);

    return (
        <div className="sub-menu">
            <p className="menu-header">
                Top Scores
            </p>
            <div className="top-scores">
                {rankArray.map((rank, ind) => {
                    let time = formatTime(rank.score);
                    if ((ind + 1) === props.scorePlace) {
                        if (newName && nameSubmitted) {
                            return (
                                <div key={ind} className="rank-row">
                                    <p className="rank-number">#{ind + 1}:</p>
                                    <p className="rank-name">{newName}</p>
                                    <p className="rank-score">{time.hourFiller}{time.hours} : {time.minuteFiller}{time.minutes} : {time.secondFiller}{time.seconds}</p>
                                </div>
                            )
                        }
                        return (
                            <div key={ind} className="rank-row">
                                <p className="rank-number">#{ind + 1}:</p>
                                <div className="update-name">
                                    <input
                                        type="text"
                                        id="name-input"
                                        maxlength="3"
                                    />
                                    <p className="rank-score">{time.hourFiller}{time.hours} : {time.minuteFiller}{time.minutes} : {time.secondFiller}{time.seconds}</p>
                                    <button className="submit-name" onClick={submitName}>Submit Name</button>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={ind} className="rank-row">
                            <p className="rank-number">#{ind + 1}:</p>
                            <p className="rank-name">{rank.name}</p>
                            <p className="rank-score">{time.hourFiller}{time.hours} : {time.minuteFiller}{time.minutes} : {time.secondFiller}{time.seconds}</p>
                        </div>
                    )
                })}
            </div>
            <button
                className="menu-button"
                onClick={replayGame}
            >Replay</button>
        </div>
    )
}

export default ReplayMenu;