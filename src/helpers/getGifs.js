export default async function getGifs(category, resultsLimit, apyKey) {
    const requestEndpoint = 'https://api.giphy.com/v1/gifs/search?q=' +
        encodeURI(category) + '&limit=' + resultsLimit + '&api_key=' + apyKey;
    try {
        const response = await fetch(requestEndpoint);
        const { data } = await response.json();
        const gifs = data.map((gifdata) => {
            return {
                id: gifdata.id,
                title: gifdata.title,
                url: gifdata.images.downsized_medium.url
            };
        });
        return gifs;
    } catch (error) {
        throw new Error('Error fetching gif: ' + error);
    }
};