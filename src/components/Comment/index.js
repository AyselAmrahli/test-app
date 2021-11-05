import { useEffect } from 'react';
import {connect} from 'react-redux';
import COMMENTS from '../../redux/actions';
import CommentItem from './CommentItem';


const Comments = ({comments,getComments}) => {

useEffect(() => {
    getComments();
},[])


const list = comments?.map(({author,createdDate,text}, index) => {
    return <CommentItem {...{author,createdDate,text}} key={index} />
});

  return (
    <ul className="list-comment">
        {list}
    </ul>
  );
}


const mapStateToProps = (state) => ({ ...state.comments });
const mapDispatchToProps = (dispatch) => ({
    getComments: () => dispatch({type: COMMENTS.FETCH})
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
