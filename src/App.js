import React, {Component} from 'react';
import './App.css';
import Validation from "./ValidationComponent/Validation";
import Char from "./CharComponent/CharComponent";

class App extends Component {
    state = {
        userInput: ''
    };

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    };

   deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
   };

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char clicked={() => this.deleteCharHandler(index)} character={ch} key={index}/>
        });
        return (
            <div className="App">
                <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation textLength={(this.state.userInput).length}/>
                {charList}
            </div>
        );
    }
}

export default App;
