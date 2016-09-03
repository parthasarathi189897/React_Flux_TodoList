import React from 'react';
import AddItem from './AddItem';
import List from './List';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

export default class ListContainer extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    TodoStore.removeChangeListener(this._onChange);
  }
  handleAddItem(){
    TodoActions.addItem(newItem);
  }
  handleRemoveItem(){
    TodoActions.removeItem(index);
  }
  _onChange(){
    this.setState({
      list: TodoStore.getList()
    })
  }
  render(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
}