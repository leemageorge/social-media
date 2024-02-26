import { useContext } from "react"
import "./Stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

  const {currentUser } = useContext(AuthContext)
  const stories = [

    // dummydata
    {
      id: 1,
      name:"Ewaan joe",
      img:"https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
   
    },
    {
      id:2,
      name: "Ewaan joe",
      img:"https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
    },
    {
      id:3,
      name: "Ewaan joe",
      img:"https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
    },
    {
      id:4,
      name: "Ewaan joe",
      img:"https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png"
     
    }
  ]
  return (

   
    
    <div className="stories">
    <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map((story)=>(
        <div className="story">
          <img src={story.img} alt="" key={story.id}/>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories