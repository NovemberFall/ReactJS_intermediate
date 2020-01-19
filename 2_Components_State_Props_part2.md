## HTTP Requests & Updating State

- update App
```js
//HTTP Requests & Updating State
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('after render(), call componentDidMount()');
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users />
        </div>

      </div>
    );
  }
}
export default App;
```
![](img/2020-01-19-09-22-58.png)
---


#### install axios
- `npm i axios`
-
- input `https://api.github.com/users`
![](img/2020-01-19-09-27-30.png)
-
- update App.js
```js
//HTTP Requests & Updating State
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then((res) => { console.log(res) });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users />
        </div>

      </div>
    );
  }
}
export default App;
```
- output: `response`
![](img/2020-01-19-09-32-37.png)
- then, output: `res.data`
```js
//HTTP Requests & Updating State
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    // console.log('after render(), call componentDidMount()');
    axios.get('https://api.github.com/users')
      .then((res) => { console.log(res.data) });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users />
        </div>

      </div>
    );
  }
}
export default App;
```
![](img/2020-01-19-09-33-13.png)


