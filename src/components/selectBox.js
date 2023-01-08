function SelectBox(props) {

    let pokeNames = ['Poliwhirl', 'Drowzee', 'Mankey'];

    let position = {left: props.left, top: props.top};
    if ((props.imageSize[0] - 85) <= position.left) {
        position.left = `${position.left - 85}px`;
    } else {
        position.left = `${position.left}px`;
    }
    if ((props.imageSize[1] - 85) <= position.top) {
        position.top = `${position.top - 85}px`;
    } else {
        position.top = `${position.top}px`;
    }


    return (
        <div className="select-box" style={position} >
            {pokeNames.map((pokemon) => {
                if (!props.foundPokemon.includes(pokemon)) {
                    return (<div key={pokemon} className="choice" onClick={props.handleClick}>
                                <p>{pokemon}</p>
                            </div>)
                }
                return null;
            })}
        </div>
    )
}

export default SelectBox;