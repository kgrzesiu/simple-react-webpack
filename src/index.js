import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from "./js/components/container/FormContainer.jsx";
// import HelloWorld from "./js/components/HelloWorld.jsx";

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                {/* <HelloWorld></HelloWorld> */}
                <FormContainer></FormContainer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))