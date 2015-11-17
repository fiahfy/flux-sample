import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export default class CommentAction {
  add(author, text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ADD,
      author: author,
      text: text
    });
  }
}
