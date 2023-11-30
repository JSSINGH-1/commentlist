import './index.css'

const CommentList = props => {
  const {eachItem} = props
  const {name, comment} = eachItem
  console.log(eachItem)
  return (
    <div>
      <li className="name-container">
        <div className="paras">
          <p>J</p>
        </div>
        <p>{name}</p>
        <p className="minute">less than a minute ago</p>
      </li>
      <p>{comment}</p>
      <div className="ldelete-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          alt="like"
        />
        <button type="button">Like</button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="dlete"
        />
      </div>
    </div>
  )
}

export default CommentList
