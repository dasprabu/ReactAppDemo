import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Background  from './Images/watch.jpeg';
import DFS  from './Images/DFS.svg';






class App extends React.Component{
    render(){


        return(
<div>
    <div className="row">
        <div className="col-sm-12 text-center headerTitle">
            <h3></h3>
            <p></p>
        </div>

    </div>
    <div className="boxstyle">
        
        <div className="transbox">
            <div className="logo">
                <img className="dfslogo" src={DFS} alt="Logo"></img>
            </div>
                <label>Login</label>
                <br />
                <input type="text" className="textbox"></input>
                <br />
                <label>Password</label>
                <br />
                <input type="text" className="textbox"></input>
                <br />
               <br/>
                <button>Login</button>
                <br/>
        </div>
        
    </div>
</div>
        )
    }
}

ReactDOM.render(<App />
, document.getElementById('app'))