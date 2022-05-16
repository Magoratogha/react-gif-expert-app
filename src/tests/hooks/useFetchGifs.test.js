import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../hooks/useFetchGifs";

describe('Test in useFetchGifs.js', () => {

    const API_KEY = 'sscNRCvW1G9JgocHcDjv3RCrAu6qZG2P';
    const RESULTS_LIMIT = 10;
    const searchCriteria = 'Test';

    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs(searchCriteria, RESULTS_LIMIT, API_KEY));
        const { data, isLoading } = result.current;
        expect(data).toEqual([]);
        expect(isLoading).toBe(true);
    });

    test('should return a state with images and isLoading in false', async() => {
        const { result } = renderHook(() => useFetchGifs(searchCriteria, RESULTS_LIMIT, API_KEY));
        const initialResult = result.current;
        await waitFor(() => {
            expect(result.current).not.toBe(initialResult);
        });
        const { data, isLoading } = result.current;
        expect(data.length).toBe(10);
        expect(isLoading).toBe(false);
    });
});