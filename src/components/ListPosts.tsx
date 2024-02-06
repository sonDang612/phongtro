import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'src/containers/Public';
import usePostsLimit from 'src/react-query/usePostsLimit';
import { Button, Post } from '.';
const ListPosts = () => {
  const [params] = useSearchParams();
  const page = params.get('page') ? Number(params.get('page')) : 0;
  const { data: postPages } = usePostsLimit({ page });
  const posts = postPages?.data;
  return (
    <>
      <div className="w-full bg-white pt-[20px] rounded-md">
        <div className="flex items-center justify-between px-[20px]">
          <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
          <span>Cập nhật: 12:05 6/2/2024</span>
        </div>
        <div className="flex items-center gap-2 my-2 px-[20px]">
          <span className="text-[13.3px] text-[#333]">Sắp xếp:</span>
          <Button
            textSize="text-[13.3px]"
            bgColor="bg-gray-200"
            text="Mặc định"
            textColor="#000"
            padding="px-[10px] py-[5px]"
          />
          <Button
            textSize="text-[13.3px]"
            bgColor="bg-gray-200"
            text="Mới nhất"
            textColor="#000"
            padding="px-[10px] py-[5px]"
          />
        </div>
        <div className="gap-5 flex flex-col ">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      {posts && <Pagination length={postPages.totalPages} currentPage={page} />}
    </>
  );
};

export default ListPosts;
