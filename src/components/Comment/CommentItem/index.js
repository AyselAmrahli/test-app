import moment  from 'moment';
const CommentItem = ({text, createdDate, author}) => {

    
  return (
    <li className="list-comment_item">
        <h4 className="comment-text">{text}</h4>
        <div className="comment-bottom">
            <span className="comment-date">
                {moment(createdDate).format()}
            </span>
            <span className="comment-author">
                {author}
            </span>
        </div>
    </li>
  );
}

export default CommentItem;
