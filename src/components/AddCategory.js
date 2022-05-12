import { useState } from "react";
import PropTypes from 'prop-types';

function AddCategory({ submitCallbackFn }) {

    const [inputValue, setInputValue] = useState('');

    function handleInputChange (event) {
        setInputValue(event.target.value);
    };

    function handleInputSubmit(event) {
        event.preventDefault();
        if (inputValue.trim().length > 2) {
            submitCallbackFn((previousValue) => [inputValue, ...previousValue]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleInputSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }    
            />
        </form>
    );
}

AddCategory.propTypes = {
    submitCallbackFn: PropTypes.func.isRequired
}

export default AddCategory;