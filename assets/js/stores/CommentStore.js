import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export default class CommentStore extends EventEmitter {
  static comments = [];
  constructor() {
    super();
  }
  static getComments() {
    return CommentStore.comments;
  }
  static emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AppConstants.ADD:
      add(action);
      CommentStore.emitChange();
      break;
  }
});

function add(action) {
  CommentStore.comments.push({
    id: Date.now(),
    author: action.author,
    text: action.text
  });
}
