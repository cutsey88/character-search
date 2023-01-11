import '../menu.css';
import titleImage from '../images/title-image.png';
import StartMenu from './startMenu';
import ReplayMenu from './replayMenu';


function Menu(props) {
    let subMenu = props.firstPlay === true ?
        <StartMenu setFirstPlay={props.setFirstPlay} setMenuOpen={props.setMenuOpen} /> :
        <ReplayMenu
            setMenuOpen={props.setMenuOpen}
            setFoundPokemon={props.setFoundPokemon}
            scorePlace={props.scorePlace}
            newRanks={props.newRanks}
            score={props.score}
            setScore={props.setScore}
        />;
    return (
        <div className="menu-overlay">
            <div className="menu">
                <img
                    className="menu-title-image"
                    src={titleImage}
                    alt="Poke Search"
                />
                {subMenu}
            </div>
        </div>
    )
}

export default Menu;