import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], count: 0, name: '', comment: ''}

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.commentsList.length + 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    console.log(commentsList)

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="comments-title">Comments</h1>
          <div className="section-one">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
            <form className="form" onSubmit={this.onAddComment}>
              <p className="comment-heading">
                Say something about 4.0 Technologies
              </p>
              <input
                value={name}
                type="text"
                className="input-text"
                placeholder="Your Name"
                onChange={this.onChangeNameInput}
              />
              <textarea
                value={comment}
                className="input-textarea"
                placeholder="Your Comment"
                onChange={this.onChangeCommentInput}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <div className="section-two">
            <p className="comments-count">{count}</p>
            <p className="comments">Comments</p>
          </div>
          <div className="section-three">
            <ul className="comment-items-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
