import p from "./posts.module.scss";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../features/postSlice";


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    console.log(posts)
  return (
    <div>
      <button type="submit" className={p.postButton} onClick={() => dispatch(getPosts())}>Get posts</button>
      {posts?.map((post) => (
  <PostItem key={post.title} post={post}/> 
      ))}
     
    </div>
  );
};

export default Posts;
