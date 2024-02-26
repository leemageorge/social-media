import { EmailOutlined, FacebookTwoTone, Instagram, Language, LinkedIn, MoreVertRounded, Pinterest, PlaceOutlined, Twitter } from "@mui/icons-material"
import "./Profile.scss"
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="image">
        <img src="https://plus.unsplash.com/premium_photo-1708684233610-7a82720cd733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" className="cover" alt="" />
        <img src="https://static.toiimg.com/thumb/msid-63395979,width-400,resizemode-4/63395979.jpg" className="profilePic" alt="" />
      </div>
      <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookTwoTone  />
              </a>
              <a href="http://instagram.com">
                <Instagram  />
              </a>
              <a href="http://twitter.com">
                <Twitter />
              </a>
              <a href="http://linkedin.com">
                <LinkedIn  />
              </a>
              <a href="http://pinterest.com">
                <Pinterest  />
              </a>
            </div>
            <div className="center">
              <span style={{fontSize: "20px", fontWeight:"600"}}>Ewaan Joe</span>
              <div className="cInfo">
                <div className="item">
                  <PlaceOutlined /> 
                  <span>India</span>
                </div>
                <div className="item">
                  <Language /> 
                  <span>leema. dev</span>
                </div>
              </div>
              <button>Follow</button>
            </div>
            <div className="right">
              <EmailOutlined />
              <MoreVertRounded />
            </div>
          </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile