function ReplayMenu(props) {

    function replayGame() {
        props.setFoundPokemon([])
        props.setMenuOpen(false);
    }

    return (
        <div className="sub-menu">
            <p className="menu-text">
                Replay
            </p>
            <button
                className="start-button"
                onClick={replayGame}
            >Replay</button>
        </div>
    )
}

export default ReplayMenu;