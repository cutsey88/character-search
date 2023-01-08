function HitNotice(props) {

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

    if (props.hit) {
        return (
            <div className="hit-notice hit" style={position} >
                <p>HIT</p>
                <p>{props.targetName.toUpperCase()}</p>
            </div>
        )
    }
    return (
        <div className="hit-notice miss" style={position} >
            <p>MISSED</p>
            <p>{props.targetName.toUpperCase()}</p>
        </div>
    )
    
}

export default HitNotice;