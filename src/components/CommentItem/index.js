// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked} = commentDetails
  const firstLetterOfName = name[0]
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <>
      <li className="comment-item">
        <div className="name-container">
          <p className="first-letter">{firstLetterOfName}</p>
          <p className="name">{name}</p>
        </div>
        <p className="comment-line">{comment}</p>
        <div>
          <div>
            <img src={likeImageUrl} alt="like" />
            <p>Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </li>
    </>
  )
}

export default CommentItem
