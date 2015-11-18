import {EventEmitter} from 'events';
import AppConstants from '../AppConstants';
import AppDispatcher from '../AppDispatcher';

const CHANGE_EVENT = 'change';

export default new (class CommentStore extends EventEmitter {
  comments = [];
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.actionType) {
        case AppConstants.ActionTypes.CREATE:
          this._add(action);
          break;
      }
      this.emit(CHANGE_EVENT);
    });
  }
  _add(action) {
    this.comments.push({
      id: Date.now(),
      author: action.author,
      text: action.text
    });
  }
  getAll() {
    return this.comments;
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})();
