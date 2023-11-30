import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentList from '../CommentItem'

import './index.css'
// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

const dataList = [
  {
    id: 1,
    name: 'Ram',
    comment: 'Janmejay is good guy ',
    isClicked: false,
  },
]

class Comments extends Component {
  state = {name: '', comment: '', contactList: dataList, commentCount: 0}

  inputName = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  updateForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isClicked: false,
    }
    this.setState(prevState => ({
      contactList: [...prevState.contactList, newContact],
      name: '',
      comment: '',
    }))
    this.setState(prevState => ({commentCount: prevState.commentCount + 1}))
  }

  render() {
    const {contactList, name, comment, commentCount} = this.state

    return (
      <div>
        <div className="mainContainer">
          <div className="detaildContainer">
            <form className="Card" onSubmit={this.updateForm}>
              <h1>Comments</h1>
              <p className="para">Say Something</p>
              {/* <form onSubmit={this.updateForm}> */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="searchInput"
                onChange={this.inputName}
              />
              <textarea
                rows="9"
                cols="30"
                value={comment}
                placeholder="Your Comment"
                onChange={this.commentInput}
              />
              <button type="submit" className="buton">
                Add Comment
              </button>
              {/* </form> */}
            </form>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="imagee"
              />
            </div>
          </div>
          <div className="commentCont">
            <p>{commentCount} Comments</p>
            <ul className="commentListCont">
              {contactList.map(eachData => (
                <CommentList key={eachData.id} eachItem={eachData} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
