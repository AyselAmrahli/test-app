
import { useState } from 'react';
import {connect} from 'react-redux';
import Comments from './components/Comment';
import COMMENTS from './redux/actions';

import './App.css';

function App({postComment}) {
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  }


  const addComment = (e) => {
    if (e.key === 'Enter') {
      
      const body = {
        author: 'Aysel Amrahli',
        text: comment
      }
      postComment(body);

      setComment('')
    }

    if(e.key === 'Escape') setComment('');
  }



  return (
    <div className="App">
      <Comments />

      <div>
        <form>
          <textarea 
            value={comment} 
            onChange={(e) => handleInputChange(e)} 
            onKeyDown={(e) => addComment(e)}
            placeholder="Add Comment"
          >
          </textarea>
        </form>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({ ...state.comments });
const mapDispatchToProps = (dispatch) => ({
    postComment: (body) => dispatch({type: COMMENTS.POST, body})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

