import { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifsGrid from "./components/GifsGrid";

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch Man']);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory submitCallbackFn={ setCategories }/>
            <hr></hr>
            <ol>
                { categories.map((category) => 
                    <GifsGrid key={category} category={ category } />) }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;