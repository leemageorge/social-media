import "./Posts.scss"

import Post from "../post/Post"

const Posts = () => {

    //Dummy data
    
  const posts = [
    {
      id:1,
      name:"Ewaan Joe",
      userId:1,
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/8/85/Dulquer_Salmaan_at_Zoya_Factor_Trailer_Launch_function_%28cropped%29.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sapiente!",
      img:"https://www.trvst.world/wp-content/uploads/2022/10/rain-quotes-alice-oswald-its-a-relief-to-5369.png"

    },
    {
      id:1,
      name:"Emeeta miriam",
      userId:2,
      profilePic: "https://www.telugu360.com/wp-content/uploads/2016/11/Keerthy-Suresh-Mahesh-Babu-.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sapiente!",
      img:"https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c.jpg"

    },

  ]
  return (
    <div className="posts">
        {posts.map((post)=>(
            <Post post={post} key ={post.id}/>
        ))}
    </div>
  )
}

export default Posts