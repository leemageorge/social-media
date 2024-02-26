import { useContext } from "react"
import "./Comments.scss"
import { AuthContext} from "../../context/authContext"

const Comments = () => {
    const { currentUser} = useContext(AuthContext)

    //Fake Comments
const comments = [{
    id:1,
    desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi perspiciatis aut corporis recusandae debitis nam aliquam impedit a alias!",
    name:"Ewaan Joe",
    userId:1,
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/8/85/Dulquer_Salmaan_at_Zoya_Factor_Trailer_Launch_function_%28cropped%29.jpg",
 
},
{
    id:2,
    desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi perspiciatis aut corporis recusandae debitis nam aliquam impedit a alias!",
    name:"Emeetta Meriam",
    userId:2,
    profilePic:"https://www.telugu360.com/wp-content/uploads/2016/11/Keerthy-Suresh-Mahesh-Babu-.jpg"

}]
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write a comments" />
            <button>Send</button>
        </div>
       {comments.map((comment)=>(
        <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info-comment">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
        </div>

       ))}
    </div>
  )
}

export default Comments