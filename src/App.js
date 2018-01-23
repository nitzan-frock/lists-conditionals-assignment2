import React, { Component } from 'react';
import './App.css';

import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    lengthOfText: 0,
    inputText: '',
  };

  inputChangeHandler = (event) => {
    const inputLength = parseInt(event.target.value.length, 10);
    this.setState({
      lengthOfText: inputLength,
      inputText: event.target.value,
    });
  }

  removeChar = (inputArray, c, index) => {
    inputArray.splice(index, 1);
    const inputString = inputArray.join('');
    this.setState({
      lengthOfText: inputString.length,
      inputText: inputString
    })
  }

  render() {
    let charBoxes = null;
    let inputArray = null;

    if (this.state.lengthOfText > 4) {
      inputArray = this.state.inputText.split('');
      charBoxes = (
        <div>
          {inputArray.map((c, index) => {
            return <Char 
              char={c} 
              click={(event) => this.removeChar(inputArray, c, index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={event => this.inputChangeHandler(event)} value={this.state.inputText}/>
        <p>{this.state.lengthOfText}</p>
        <Validation textLength={this.state.lengthOfText} />
        {charBoxes}
      </div>

    );
  }
}

export default App;
