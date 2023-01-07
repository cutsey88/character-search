import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import SearchImage from './searchImage';
import SelectBox from './selectBox';
import pokemonImage from '../images/pokemon.jpg';

function Content(props) {
    const [selectBoxDisplay, setSelectBoxDisplay] = useState(null);
    const [selecting, setSelecting] = useState(false);
    const [clickPosition, setClickPosition] = useState(null);
    const [imageSize, setImageSize] = useState(null);

    function imageClick(e) {
        if (selecting) {
            setSelectBoxDisplay(null);
            setSelecting(false);
        } else {
            setClickPosition([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
            setImageSize([e.currentTarget.width, e.currentTarget.height]);
            setSelecting(true);
        }
    }

    useEffect(() => {
        setSelectBoxDisplay(() => {
            if (selecting) {
                return (
                    <SelectBox
                        left={`${clickPosition[0]}px`}
                        top={`${clickPosition[1]}px`}
                        handleClick={selectionClick}
                        foundPokemon={props.foundPokemon}
                    />
                );
            }
            return null;
        })
    }, [selecting])

    function getHypotenuse(midPoint, clickPoint) {
        let xDiff = Math.abs((midPoint[0] * (imageSize[0] / 1831)) - clickPoint[0]);
        let yDiff = Math.abs((midPoint[1] * (imageSize[1] / 1831)) - clickPoint[1]);
        return Math.round(Math.sqrt((xDiff**2) + (yDiff**2)));

    }

    async function selectionClick(e) {
        let targetName = e.target.textContent;
      
        //Get info from firebase
        const docRef = doc(firestore, "character-coords", "pokemon-coords");
        const docSnap = await getDoc(docRef);
        let coords = docSnap.data();

        if (docSnap.exists()) {
            console.log("Document data:", coords);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        let pokeInfo = coords[targetName];
        console.log(clickPosition);
        console.log(coords);
        console.log(coords[targetName]);
        let hypotenuse = getHypotenuse(pokeInfo.coords, clickPosition);
        let hit = hypotenuse <= Math.round(pokeInfo.rad * (imageSize[0] / 1831)) ? true : false;
        if (hit) {
            console.log(`hit ${targetName}`);
            props.markFound(targetName);
        } else {
            console.log(`missed ${targetName}`)
        }
        setSelecting(false);
    }

    return (
        <div className='content'>
            <SearchImage
                image={pokemonImage}
                alt="pokemon"
                handleClick={imageClick}
            />
            {selectBoxDisplay}
        </div>
    )
}

// check x,y (e) => { console.log([e.nativeEvent.offsetX, e.nativeEvent.offsetY]) }

export default Content;