import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentComponents';

ReactDOM.render(
  <CommentBox url="/api/comments.json" pollInterval={2000} />,
  document.getElementById('app')
);
