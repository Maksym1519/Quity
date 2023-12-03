import p from "./posts.module.scss";
import { removePostById } from "../../../features/postSlice";
import { useDispatch } from "react-redux";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return <div className={p.postItem} onClick={() => dispatch(removePostById(post.id))}>{post.title}</div>;
};

export default PostItem;
