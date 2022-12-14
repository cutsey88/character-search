function SelectBox(props) {
    return (
        <div className="select-box" style={{left: props.left, top: props.top}} >
            <div className="choice" onClick={props.handleClick}>
                <p>Poliwhirl</p>
            </div>
            <div className="choice" onClick={props.handleClick}>
                <p>Drowzee</p>
            </div>
            <div className="choice" onClick={props.handleClick}>
                <p>Mankey</p>
            </div>
        </div>
    )
}

export default SelectBox;