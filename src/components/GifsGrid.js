import { Fragment } from "react";
import PropTypes from 'prop-types';
import useFetchGifs from "../hooks/useFetchGifs";
import GifsGridItem from "./GifsGridItem";

function GifGrid({ category }) {

    const API_KEY = 'sscNRCvW1G9JgocHcDjv3RCrAu6qZG2P';
    const RESULTS_LIMIT = 10;
    const { data: gifs, isLoading } = useFetchGifs(category, RESULTS_LIMIT, API_KEY);

    return (
        <Fragment>
            <h3>{ category }</h3>
            { isLoading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="cards-grid">
                { gifs.map((gif) =>
                    <GifsGridItem key={ gif.id } { ...gif } />) }
            </div>
        </Fragment>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;