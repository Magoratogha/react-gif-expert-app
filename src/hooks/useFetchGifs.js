import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

export default function useFetchGifs(category, resultsLimit, apiKey) {
    const [state, setState] = useState({
        data: [],
        isLoading: true
    });

    useEffect(() => {
        getGifs(category, resultsLimit, apiKey).then((gifs) => setState({
            data: gifs,
            isLoading: false
        }));
    }, [ apiKey, category, resultsLimit ]);

    return state;
};