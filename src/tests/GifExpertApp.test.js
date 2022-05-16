import { render } from "@testing-library/react";
import GifExpertApp from "../GifExpertApp";

describe('Test in <GifExpertApp />', () => {

    test('should render the component properly', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });
});