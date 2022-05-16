import { render, queryByAttribute } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCategory from "../../components/AddCategory";

describe('Test in <AddCategory />', () => {
    
    const callbackFnMock = jest.fn();
    const user = userEvent.setup();
    
    test('should render properly', () => {
        const { container } = render(<AddCategory submitCallbackFn={ callbackFnMock } />);
        expect(container).toMatchSnapshot();
    });

    test('should change the input value when user type a new input', async() => {
        const { container } = render(<AddCategory submitCallbackFn={ callbackFnMock } />);
        const value = 'This is a test';
        const inputElement = queryByAttribute('type', container, 'text');
        await user.type(inputElement, value);
        expect(inputElement).toHaveValue(value);
    });

    test('should not call submitCallbackFn if user type a input with length < 3 characters', async() => {
        const { container } = render(<AddCategory submitCallbackFn={ callbackFnMock } />);
        const value = 'Th';
        const inputElement = queryByAttribute('type', container, 'text');
        await user.type(inputElement, value);
        await user.type(inputElement, '{Enter}');
        expect(callbackFnMock).not.toHaveBeenCalled();
    });

    test('should call submitCallbackFn if user type a valid input and then clean the value', async() => {
        const { container } = render(<AddCategory submitCallbackFn={ callbackFnMock } />);
        const value = 'Test value';
        const inputElement = queryByAttribute('type', container, 'text');
        await user.type(inputElement, value);
        await user.type(inputElement, '{Enter}');
        expect(callbackFnMock).toHaveBeenCalledWith(expect.any(Function));
        expect(inputElement).toHaveValue('');
    });
});