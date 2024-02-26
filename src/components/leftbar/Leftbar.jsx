import "./Leftbar.scss"
import Friends from "../../assest/1.png"
import Group from "../../assest/2.png"
import Market from "../../assest/3.png"
import Watch from "../../assest/4.png"
import Memories  from "../../assest/5.png"
import Events from "../../assest/6.png"
import Gaming from "../../assest/7.png"
import Gallery from "../../assest/8.png"
import Videos from "../../assest/9.png"
import Messages from "../../assest/10.png"
import Tutorials from "../../assest/11.png"
import Courses from "../../assest/12.png"
import Fund from "../../assest/13.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

 

const Leftbar = () => {

  const { currentUser} = useContext(AuthContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={currentUser.profilePic} alt="" />
   
          <span>{currentUser.name}</span>
          </div>
          <div className="item">
              <img src={Friends} alt="" />
              <span>Friends</span>

          </div>
          <div className="item">
              <img src={Group} alt="" />
              <span>Groups</span>

          </div>
          <div className="item">
              <img src={Market} alt="" />
              <span>Marketplace</span>

          </div>
          <div className="item">
              <img src={Watch} alt="" />
              <span>Watch</span>

          </div>
          <div className="item">
              <img src={Memories} alt="" />
              <span>Memories</span>

          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Message</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund Raiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Leftbar