import getGifs from "../../helpers/getGifs";

describe('Test in getGifs.js helper', () => {

    test('should make an http request and fetch 10 image data elements', async() => {
        const apiKey = 'sscNRCvW1G9JgocHcDjv3RCrAu6qZG2P';
        const resultsLimit = 10;
        const category = 'One Punch Man';
        const response = await getGifs(category, resultsLimit, apiKey);
        expect(response.length).toBe(resultsLimit);
    });

    test('should make an http request and fetch no image data elements when there is no category', async() => {
        const apiKey = 'sscNRCvW1G9JgocHcDjv3RCrAu6qZG2P';
        const resultsLimit = 10;
        const category = '';
        const response = await getGifs(category, resultsLimit, apiKey);
        expect(response.length).toBe(0);
    });

    test('should make an http request and throw an error if apiKey is invalid', async() => {
        const apiKey = '';
        const resultsLimit = 10;
        const category = 'One Punch Man';
        await expect(getGifs(category, resultsLimit, apiKey)).rejects.toThrowError();
    });
});