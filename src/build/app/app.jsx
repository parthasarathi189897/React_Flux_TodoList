import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <ListContainer />
//         </div>
//       </div>
//     );
//   }
// }
// 
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);