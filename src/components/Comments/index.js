import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

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
  render() {
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
            <form className="form">
              <p className="comment-heading">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="input-text"
                placeholder="Your Name"
              />
              <textarea className="input-textarea" placeholder="Your Comment" />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <div className="section-two">
            <p className="comments-count">0</p>
            <p className="comments">Comments</p>
          </div>
          <div className="section-three">
            <h1>HI</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
