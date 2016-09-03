import AppDispatcher from '../dispatcher/AppDispatcher';
import * as appConstants from '../constants/appConstants';
import events from 'events';


/*Declared private model and setter methods for data manipulation*/
let _store = {
  list: []
};
let addItem = function(item){
  _store.list.push(item);
};
let removeItem = function(index){
  _store.list.splice(index, 1);
}

export default class TodoStore extends events.EventEmitter{
  constructor(){
    super();
  }
  addChangeListener(cb){
    this.on(appConstants.CHANGE_EVENT, cb);
  }
  removeChangeListener(){
    this.removeListener(CHANGE_EVENT, cb);
  }
  getList(){
    return _store.list;
  }
}

AppDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      addItem(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
