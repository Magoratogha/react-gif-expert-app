import { queryAllByAttribute, queryByAttribute, render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifsGrid";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Test in <GifsGrid />', () => {
    
    const category = 'Test'; 

    test('should render the component properly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            isLoading: true
        });
        const { container } = render(<GifGrid category={ category } />);
        expect(container).toMatchSnapshot();
    });
    
    test('should render the component properly when useFetch hook returns an images set', () => {
        const gifsList = [{
            id: 'testId',
            title: 'testTitle',
            url: 'https://test-url.com/test.jpg'
        }];
        useFetchGifs.mockReturnValue({
            data: gifsList,
            isLoading: false
        });
        const { container } = render(<GifGrid category={ category } />);
        expect(screen.queryByText('Loading...')).toBeNull();
        expect(queryAllByAttribute('class', container, 'gif-card', { exact: false }).length).toBe(gifsList.length);
    });
});