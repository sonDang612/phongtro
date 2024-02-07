import React from 'react';
import { Modal, SearchItem } from 'src/components';
import icons from 'src/utils/icons';
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
const Search = () => {
  return (
    <>
      <div className="p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex justify-around items-center gap-2">
        <SearchItem
          IconBefore={<MdOutlineHouseSiding />}
          IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
          text="Phòng trọ, nhà trọ"
          bold
        />
        <SearchItem
          IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
          IconBefore={<HiOutlineLocationMarker color="rgb(156,163,175)" />}
          text="Toàn quốc"
        />
        <SearchItem
          IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
          IconBefore={<TbReportMoney color="rgb(156,163,175)" />}
          text="Chọn giá"
        />
        <SearchItem
          IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
          IconBefore={<RiCrop2Line color="rgb(156,163,175)" />}
          text="Chọn diện tích"
        />
        <button
          type="button"
          className="outline-none py-2 px-4 w-full bg-secondary1 text-sm rounded-md text-white font-medium flex items-center justify-center gap-2"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      <Modal />
    </>
  );
};

export default Search;
