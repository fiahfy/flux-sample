import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';

export default new (class CommentStore extends EventEmitter {
  comments = [];
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.actionType) {
        case AppConstants.ACTION_TYPE.ADD:
          this._add(action);
          break;
      }
      this.emit(AppConstants.STORE_EVENT.CHANGE);
    });
  }
  _add(action) {
    this.comments.push({
      id: Date.now(),
      author: action.author,
      text: action.text
    });
  }
  getComments() {
    return this.comments;
  }
})();
