import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  saveuser(){
    axios.post('/api/users',{
      username:"Dan",
      email:"dan@139.com",
      password:'123456abc'
    }).then((res)=>{
      console.log("success save ");
      console.log(res)

    }).catch(err=>{
      console.log("fail");
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
     
        </header>
        <section>
          <button onClick={this.saveuser}>Save User</button>

        </section>
      </div>
    );
  }
}

export default App;
