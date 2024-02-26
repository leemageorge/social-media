import { Link } from "react-router-dom";
import "./Post.scss"
import { FavoriteBorderOutlined, FavoriteOutlined, MoreHorizRounded, ShareOutlined, TextsmsOutlined } from "@mui/icons-material";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {

  const liked = false;
  const [commentOpen, setCommentCopen] = useState(false)

  return (
    <div className="post">
      <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
              <span className="name">{post.name}</span>
              </Link>
              <span className="date"> 1 mints ago</span>
          </div>
          </div>
          <MoreHorizRounded />
        
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {liked ?  <FavoriteOutlined /> :<FavoriteBorderOutlined /> }
          12 likes
        </div>
        <div className="item" onClick={()=>setCommentCopen(!commentOpen)}>
        <TextsmsOutlined />
          15 Comments
        </div>
        <div className="item">
         <ShareOutlined />
          share
        </div>
      </div>
      {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post