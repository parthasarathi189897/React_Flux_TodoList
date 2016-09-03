import Flux from 'flux';

export default class AppDispatcher extends Flux.Dispatcher{
	handleAction(action){
		this.dispatch({
		    source: 'VIEW_ACTION',
		    action: action
		});
	}
}
