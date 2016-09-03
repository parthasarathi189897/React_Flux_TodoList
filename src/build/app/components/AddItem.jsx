import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e){
      if(e.keyCode === 13){
        let newItem = this.refs.newItem.getDOMNode().value;
        this.refs.newItem.getDOMNode().value = '';
        this.props.add(newItem);
      }
    }
    render() {
        return (
          <div>
            <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
          </div>
        );
    }
}
