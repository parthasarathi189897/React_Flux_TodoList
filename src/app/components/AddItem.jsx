import React from 'react';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
      if(event.keyCode === 13){
        let newItem = event.target.value;
        // this.refs.newItem.getDOMNode().value = '';
        console.log('newItem',newItem);
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
