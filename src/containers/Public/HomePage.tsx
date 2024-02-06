import { text } from 'src/utils/constants';
import { Search } from '.';
import { ListPosts, SlideBar, Provinces } from 'src/components';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Search />
      <div className="items-center justify-center flex flex-col">
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-[14.5px] text-[#65676b]">{text.HOME_DESCRIPTION}</p>
        <Provinces />
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <ListPosts />
        </div>
        <div className="w-[30%] border border-red-500">
          <SlideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
