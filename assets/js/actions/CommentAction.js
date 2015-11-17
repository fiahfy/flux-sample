import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';

export default class CommentAction {
  static add(author, text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ACTION_TYPE.ADD,
      author: author,
      text: text
    });
  }
}
