import AppConstants from '../AppConstants';
import AppDispatcher from '../AppDispatcher';

export default class CommentAction {
  static create(author, text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ActionTypes.CREATE,
      author: author,
      text: text
    });
  }
}
