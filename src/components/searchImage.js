function SearchImage(props) {
    return (
        <div className="imageContainer">
            <img
                className="search-image"
                src={props.image}
                alt={props.alt}
                onClick={props.handleClick}
            />
        </div>
    )
}

export default SearchImage;