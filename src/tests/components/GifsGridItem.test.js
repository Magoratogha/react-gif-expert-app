import { queryByAttribute, render, screen } from "@testing-library/react";
import GifsGridItem from "../../components/GifsGridItem";

describe('Test in <GifsGridItem />', () => {
    const title = 'Test title';
    const url = 'www.test-url.com';

    test('should render the component properly', () => {
        const { container } = render(<GifsGridItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });

    test('should to contain a paragraph with the given param title', () => {
        render(<GifsGridItem title={ title } url={ url } />);
        const paragraphElement = screen.queryByText(title.trim(), { selector: 'p' });
        expect(paragraphElement).toBeTruthy();
    });

    test('should to contain an image with the given params title and url', () => {
        render(<GifsGridItem title={ title } url={ url } />);
        const imageElement = screen.queryByAltText(title.trim(), { selector: 'img' });
        expect(imageElement).toBeTruthy();
        expect(imageElement).toHaveAttribute('src', url);
    });

    test('should to contain a div with the "animate__bounceIn" class', () => {
        const { container } = render(<GifsGridItem title={ title } url={ url } />);
        const divElement = queryByAttribute('class', container, 'animate__bounceIn', { exact: false });
        expect(divElement).toBeTruthy();
    });
});