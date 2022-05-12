function GifsGridItem({ title, url}) {

    return (
        <div className="gif-card animate__animated animate__bounceIn">
            <img src={ url } alt={ title }/>
            <p>{ title.trim() || 'No title available' }</p>
        </div>
    );
}

export default GifsGridItem;