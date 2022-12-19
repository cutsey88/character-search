import '../header.css';
import titleImage from '../images/title-image.png'
import poliwhirlImage from '../images/poliwhirl-image.png';
import drowzeeImage from '../images/drowzee-image.png';
import mankeyImage from '../images/mankey-image.png';

function Header() {
    return (
        <div className="header">
            <img
                className="titleImage"
                src={titleImage}
                alt="Poke Search"
            />
            <div className="searchTargets">
                <div className="targetImageBox">
                    <img
                        className="targetImage"
                        src={poliwhirlImage}
                        alt="poliwhirl"
                    />
                    <p className="targetName">Poliwhirl</p>
                </div>
                <div className="targetImageBox">
                    <img
                        className="targetImage"
                        src={drowzeeImage}
                        alt="drowzee"
                    />
                    <p className="targetName">Drowzee</p>
                </div>
                <div className="targetImageBox">
                    <img
                        className="targetImage"
                        src={mankeyImage}
                        alt="mankey"
                    />
                    <p className="targetName">Mankey</p>
                </div>
            </div>
            <div className="timer-box">
                <p className="timer"></p>
            </div>
        </div>
    )
}

export default Header;