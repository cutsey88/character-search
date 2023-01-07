import '../header.css';
import titleImage from '../images/title-image.png';
import poliwhirlImage from '../images/poliwhirl-image.png';
import drowzeeImage from '../images/drowzee-image.png';
import mankeyImage from '../images/mankey-image.png';

function Header(props) {
    let hours = Math.floor(props.timer / 3600);
    let minutes = Math.floor((props.timer - (hours * 3600)) / 60);
    let seconds = props.timer - (hours * 3600) - (minutes * 60);
    let hourFiller = hours >= 10 ? null : 0;
    let minuteFiller = minutes >= 10 ? null : 0;
    let secondFiller = seconds >= 10 ? null : 0;

    return (
        <div className="header">
            <img
                className="title-image"
                src={titleImage}
                alt="Poke Search"
            />
            <div className="search-targets">
                <div className="target-imagebox">
                    <img
                        className="target-image"
                        src={poliwhirlImage}
                        alt="poliwhirl"
                    />
                    <p className="target-name">Poliwhirl</p>
                </div>
                <div className="target-imagebox">
                    <img
                        className="target-image"
                        src={drowzeeImage}
                        alt="drowzee"
                    />
                    <p className="target-name">Drowzee</p>
                </div>
                <div className="target-imagebox">
                    <img
                        className="target-image"
                        src={mankeyImage}
                        alt="mankey"
                    />
                    <p className="target-name">Mankey</p>
                </div>
            </div>
            <div className="timer-box">
                <p className="timer">{hourFiller}{hours} : {minuteFiller}{minutes} : {secondFiller}{seconds}</p>
            </div>
            <div className="timer-buffer"></div>
        </div>
    )
}

export default Header;