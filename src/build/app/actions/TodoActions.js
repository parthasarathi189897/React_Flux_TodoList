import AppDispatcher from '../dispatcher/AppDispatcher';
import * as appConstants from '../constants/appConstants';

export default class TodoActions{
    addItem(item){
      AppDispatcher.handleAction({
        actionType: appConstants.ADD_ITEM,
        data: item
      });
    }
    removeItem(index){
      AppDispatcher.handleAction({
        actionType: appConstants.REMOVE_ITEM,
        data: index
      });
    }
}
