import { useParams } from 'react-router-dom';
import usePost from 'src/react-query/usePost';

const PostDetails = () => {
  const { postId } = useParams();
  const { data: post } = usePost({ postId });
  return <div>{post?.address}</div>;
};

export default PostDetails;
