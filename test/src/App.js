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


















import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Smith';
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}
export default App;