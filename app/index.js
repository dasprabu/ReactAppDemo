import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
    render(){
        return(
<div>
    <div className="bg-danger text-center">
        <h1>My First Bootstrap Pageee</h1>
        <p>Resize this responsive page to see the effect!</p>
    </div>
</div>
        )
    }
}

ReactDOM.render(<App />
, document.getElementById('app'))