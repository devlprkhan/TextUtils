// 'useState' is a 'Hook' is used to create state
import React, { useState } from 'react'


export default function Textform(props) {

    // Define Functions
    const handleUpdateValue = (event) => {
        // With The Help Of 'event' We Can change The state 'text' to new text by using 'setText'.
        setText(event.target.value);
    }

    const convertToUpperCase = () => {
        // Convert To Upper Case
        let newText = text.toUpperCase();
        // Update The State
        setText(newText);
    }


    const convertFirstWordToUpperCase = () => {

        // Convert Capitalize the first letter of each word in a string 
        let newText = text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

        // Update The State
        setText(newText);
    }

    const convertToLowerCase = () => {
        // Convert To Lower Case
        let newText = text.toLowerCase();
        // Update The State
        setText(newText);
    }

    const removeSpaces = () => {
        //We can also use the String.replace() method that uses a regular expression to search whitespaces and replace them with empty string('').
        let newText = text.replace(/\s+/g, '');
        // Update The State
        setText(newText);

    }
    const removeExtraSpaces = () => {
        //Remove Extra Spaces Using REGEX.
        let newText = text.replace(/\s+/g, ' ').trim();

        // Update The State
        setText(newText);

    }

    const clearText = () => {
        //Set text Area to Empty By Using newText Empty Variable
        let newText = '';
        // Update The State
        setText(newText);


    }

    // Copy Clipboared Function
    const copyText = () => {
        /* Get the text field */
        let textArea = document.getElementById("textArea");

        /* Select the text field */
        textArea.select();
        textArea.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(textArea.value);
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');
   

    let themeStylingNums = ['One', 'Two', 'Three', 'Four']
    document.title = 'TextUtils - TextForm';

    function textFormPageStyling(themeStyleNumber) {
        // #SEC1
        // Main Text Form Container Styling Using Classes
        let textArea = document.getElementsByClassName('textArea');

        Array.from(textArea).forEach(element => {

            for (const num of themeStylingNums) {
                if (element.classList.contains('textArea' + num)) {
                    element.classList.remove('textArea' + num);
                    element.classList.remove('textAreaDefault');
                }
            }

            element.classList.add('textArea'+themeStyleNumber);

        });

        // #SEC2
        // Buttons Styling Using classes
        let btn = document.getElementsByClassName('btn');

        Array.from(btn).forEach(element => {

            for (const num of themeStylingNums) {
                if (element.classList.contains('modeButton' + num)) {
                    element.classList.remove('modeButton' + num);
                }
            }

            element.classList.add('modeButton'+themeStyleNumber);

        })

        // #SEC3
        // Text Preview "Summary" styling Using Classes
        let previewText = document.getElementsByClassName('stylePreviewCharacters');

        Array.from(previewText).forEach(element => {

            for (const num of themeStylingNums) {
                if (element.classList.contains('stylePreviewCharacters' + num)) {
                    element.classList.remove('stylePreviewCharacters' + num);
                    element.classList.remove('defaultStylePrev');
                }
            }
            
            element.classList.add('stylePreviewCharacters'+themeStyleNumber);

        })
    }

    if (props.mode === 'themeOne') {

        textFormPageStyling('One');

    }
    else if (props.mode === 'themeTwo') {

        textFormPageStyling('Two');

    }
    else if (props.mode === 'themeThree') {

        textFormPageStyling('Three');

    }
    else if (props.mode === 'themeFour') {

        textFormPageStyling('Four');

    }


    return (
        <div className="lightModeText">
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                {/* onChange Function Is Used To Edit Text Area Without This We Cannot Edit In text Area For More Check  "handleUpdateValue" Function & the Value='' by default the state value we use in 'useState'*/}
                <textarea className="form-control shadow-none textArea textAreaDefault" id="textArea" rows="8" value={text} onChange={handleUpdateValue} placeholder='Enter Text Here'>
                </textarea>
            </div>
            <div className="buttonGroup d-flex flex-wrap justify-content-start">
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={convertToUpperCase}>Convert Upper Case</button>
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={convertToLowerCase}>Convert Lower Case</button>
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={convertFirstWordToUpperCase}>Capitalize Text</button>
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={removeSpaces}>Remove Spaces</button>
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-info shadow-none m-2 rounded-pill" onClick={copyText}>Copy</button>
                <button className="btn btn-outline-info shadow-none m-2 rounded-pill" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                {/* Using Ternary Operator And Set Condition */}
                <p>{text.length > 0 ? text : 'Enter text for preview !'}
                    <br />
                    <br />
                    <span className="textStyling">
                        Words: <em className="stylePreviewCharacters defaultStylePrev"> {text.length > 0 ? text.split(' ').length : 0} </em>Character: <em className="stylePreviewCharacters defaultStylePrev"> {text.length}</em> Time to read: <em className="stylePreviewCharacters defaultStylePrev">{0.008 * text.split(' ').length}min</em>
                    </span>
                </p>
            </div>
        </div>
    )
}
