// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello from React</h1>
//       </div>
//     );
//   }
// }

// export default App;














// import React, { Component, Fragment } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Hello from React</h1>
//         <h2>Good bye</h2>
//       </Fragment>
//     );
//   }
// }

// export default App;













// import React, { Component, Fragment } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Hello from React</h1>
//         <h2>Good bye</h2>
//       </>
//     );
//   }
// }

// export default App;


















// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     const name = 'John Smith';
//     const loading = false;
//     const showName = true;

//     return (
//       <div className="App">
//         <h1>My App</h1>
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
//       </div>
//     );
//   }
// }
// export default App;


































// //Components Props && PropTyeps
// import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar';
// import './App.css';

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Navbar />
//         {/* <Navbar title="Github Finder" icon='fab fa-github' /> */}
//         {/* 'fab fa-github' , is importing from fontawesome  */}
//       </div>
//     );
//   }
// }
// export default App;





























// //Getting Started With Component State
// import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import './App.css';

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Navbar />
//         <Users />
//       </div>
//     );
//   }
// }
// export default App;




























// //Getting Started With Component State
// import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import './App.css';

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Navbar />
//         <div className='container'>
//           <Users />
//         </div>

//       </div>
//     );
//   }
// }
// export default App;































// //HTTP Requests & Updating State
// import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   componentDidMount() {
//     // console.log('after render(), call componentDidMount()');
//     axios.get('https://api.github.com/users')
//       .then((res) => { console.log(res.data) });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <div className='container'>
//           <Users />
//         </div>

//       </div>
//     );
//   }
// }
// export default App;




























//HTTP Requests & Updating State
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');

    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }
}
export default App;