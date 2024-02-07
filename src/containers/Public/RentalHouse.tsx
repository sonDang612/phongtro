import {
  ItemSlideBar,
  ListPosts,
  Provinces,
  NewestPosts,
} from 'src/components';
import useAreas from 'src/react-query/useAreas';
import usePrices from 'src/react-query/usePrices';
import { text } from 'src/utils/constants';
import { Search } from '.';

const RentalHouse = () => {
  const { data: prices } = usePrices();
  const { data: areas } = useAreas();

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
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSlideBar
            content={prices}
            title="Xem theo giá"
            type="priceCode"
          />
          <ItemSlideBar
            content={areas}
            title="Xem theo diện tích"
            type="areaCode"
          />
          <NewestPosts />
        </div>
      </div>
    </div>
  );
};

export default RentalHouse;
