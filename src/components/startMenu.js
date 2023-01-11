function StartMenu(props) {

    function startGame() {
        props.setFirstPlay(false);
        props.setMenuOpen(false);
    }

    return (
        <div className="sub-menu">
            <p className="menu-text">
                Find the target pokemon as fast as you can to make it to the leaderboard.
            </p>
            <button
                className="menu-button"
                onClick={startGame}
            >
                Start
            </button>
        </div>
    )
}

export default StartMenu;