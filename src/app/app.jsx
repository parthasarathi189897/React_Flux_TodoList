import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer';

/**
 * 
 */
class App extends React.Component {
  constructor(props) {
      super(props);
  }
  /**
   * render method of the component
   * @return {[type]} [description]
   */
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

/**
 * Reactdom to render the component, Here App is the entry component
 */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);