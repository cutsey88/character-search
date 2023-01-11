import '../header.css';
import titleImage from '../images/title-image.png';
import poliwhirlImage from '../images/poliwhirl-image.png';
import drowzeeImage from '../images/drowzee-image.png';
import mankeyImage from '../images/mankey-image.png';
import formatTime from '../timerFormatter';

function Header(props) {
    let time = formatTime(props.timer);

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
                <p className="timer">{time.hourFiller}{time.hours} : {time.minuteFiller}{time.minutes} : {time.secondFiller}{time.seconds}</p>
            </div>
            <div className="timer-buffer"></div>
        </div>
    )
}

export default Header;