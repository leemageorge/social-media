import { Link } from "react-router-dom"
import "./Navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";




const Navbar = () => {

const { toggle, darkMode} = useContext(DarkModeContext)
const { currentUser} = useContext(AuthContext)


  return (
     <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span >LeeSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} />:<DarkModeOutlinedIcon  onClick={toggle}/> }
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
     </div>
  )
}

export default Navbar