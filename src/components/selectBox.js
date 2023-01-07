function SelectBox(props) {

    let pokeNames = ['Poliwhirl', 'Drowzee', 'Mankey'];
    return (
        <div className="select-box" style={{left: props.left, top: props.top}} >
            {pokeNames.map((pokemon) => {
                if (!props.foundPokemon.includes(pokemon)) {
                    return (<div className="choice" onClick={props.handleClick}>
                                <p>{pokemon}</p>
                            </div>)
                }
                return null;
            })}
        </div>
    )
}

export default SelectBox;