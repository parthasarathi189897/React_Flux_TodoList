import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer';

class App extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    );
  }
}


export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);