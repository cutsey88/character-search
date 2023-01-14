import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import SearchImage from './searchImage';
import SelectBox from './selectBox';
import HitNotice from './hitNotice';
import pokemonImage from '../images/pokemon.jpg';

function Content(props) {
    const [selectBoxDisplay, setSelectBoxDisplay] = useState(null);
    const [hitNotice, setHitNotice] = useState(null);
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
                        left={clickPosition[0]}
                        top={clickPosition[1]}
                        handleClick={selectionClick}
                        foundPokemon={props.foundPokemon}
                        imageSize={imageSize}
                    />
                );
            }
            return null;
        })
    }, [selecting])

    useEffect(() => {
        if (!selecting) {
            const interval = setInterval(() => {
                setHitNotice(null)
            }, 2800);
            return () => {
                clearInterval(interval);
            }
        }
    }, [selecting])

    function getHypotenuse(midPoint, clickPoint) {
        let xDiff = Math.abs((midPoint[0] * (imageSize[0] / 1831)) - clickPoint[0]);
        let yDiff = Math.abs((midPoint[1] * (imageSize[1] / 1831)) - clickPoint[1]);
        return Math.round(Math.sqrt((xDiff**2) + (yDiff**2)));

    }

    async function selectionClick(e) {
        setHitNotice(null);
        let targetName = e.target.textContent;
      
        //Get info from firebase
        const docRef = doc(firestore, "character-coords", "pokemon-coords");
        const docSnap = await getDoc(docRef);
        let coords = docSnap.data();

        let pokeInfo = coords[targetName];
        let hypotenuse = getHypotenuse(pokeInfo.coords, clickPosition);
        let hit = hypotenuse <= Math.round(pokeInfo.rad * (imageSize[0] / 1831)) ? true : false;
        if (hit) {
            props.markFound(targetName);
        }
        setHitNotice(
            <HitNotice
                hit={hit}
                imageSize={imageSize}
                left={clickPosition[0]}
                top={clickPosition[1]}
            />
        )
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
            {hitNotice}
        </div>
    )
}

export default Content;