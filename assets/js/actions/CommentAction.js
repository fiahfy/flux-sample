import AppConstants from '../AppConstants';
import AppDispatcher from '../AppDispatcher';

export default class CommentAction {
  static add(author, text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ActionTypes.ADD,
      author: author,
      text: text
    });
  }
}
