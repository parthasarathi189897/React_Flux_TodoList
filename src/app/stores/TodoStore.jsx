import AppDispatcher from '../dispatcher/AppDispatcher';
import * as appConstants from '../constants/appConstants';
import events from 'events';
import { EventEmitter } from 'events';


/*Declared private model and setter methods for data manipulation*/
let _store = {  
  list: []
};

const addItem = (item) => {  
  _store.list.push(item);
};

const removeItem = (index) => {  
  _store.list.splice(index, 1);
}

class TodoStoreClass extends EventEmitter{
  constructor(){
    super();
  }
  addChangeListener(cb){
    this.on(appConstants.CHANGE_EVENT, cb);
  }
  removeChangeListener(){
    this.removeListener(appConstants.CHANGE_EVENT, cb);
  }
  getList(){
    return _store.list;
  }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      addItem(action.data);
      TodoStore.emit(appConstants.CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(action.data);
      TodoStore.emit(appConstants.CHANGE_EVENT);
      break;
    default:
      return true;
  }
});



export default TodoStore; 
