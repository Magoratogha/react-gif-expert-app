import PropTypes from 'prop-types';

function GifsGridItem({ title, url }) {

    return (
        <div className="gif-card animate__animated animate__bounceIn">
            <img src={ url } alt={ title?.trim() }/>
            <p>{ title?.trim() || 'No title available' }</p>
        </div>
    );
}

GifsGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default GifsGridItem;