import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./js/components/HelloWorld.jsx";

class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld></HelloWorld>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))