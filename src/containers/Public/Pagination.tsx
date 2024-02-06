import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { PageNumber } from 'src/components';
import icons from 'src/utils/icons';
type Props = {
  length: number;
  currentPage: number;
};

const { GrLinkNext, GrLinkPrevious } = icons;
const Pagination = (props: Props) => {
  const { length, currentPage } = props;
  const navigate = useNavigate();

  const handleChangePage = (pageNumber: number) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        page: `${pageNumber}`,
      }).toString(),
    });
  };

  const handleChangePageByType = (
    pageNumber: number,
    type: 'prev' | 'next'
  ) => {
    if (pageNumber === 0 && type === 'prev') return undefined;
    if (pageNumber === length - 1 && type === 'next') return undefined;
    navigate({
      pathname: '/',
      search: createSearchParams({
        page: `${type === 'next' ? pageNumber + 1 : pageNumber - 1}`,
      }).toString(),
    });
  };

  const handlePageValues = () => {
    if (currentPage === 0) {
      return [
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3,
        currentPage + 4,
      ];
    }
    if (currentPage === length - 1) {
      return [
        currentPage - 4,
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
      ];
    }
    if (currentPage === length - 2) {
      return [
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ];
    }

    if (currentPage === length - 3) {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
    return [
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
    ];
  };

  return (
    <div className="flex flex-row gap-[5px] mb-[50px] mt-[20px] items-center justify-center">
      <PageNumber
        value={<GrLinkPrevious size={20} />}
        onClick={() => handleChangePageByType(currentPage, 'prev')}
      />
      {currentPage > 4 && (
        <PageNumber
          selected={false}
          value={'...'}
          onClick={() => handleChangePage(0)}
        />
      )}
      {handlePageValues().map((value) => (
        <PageNumber
          key={value}
          selected={value === currentPage}
          value={value}
          onClick={() => handleChangePage(value)}
        />
      ))}
      {currentPage < length - 4 && (
        <PageNumber
          selected={false}
          value={'...'}
          onClick={() => handleChangePage(length - 1)}
        />
      )}
      <PageNumber
        value={<GrLinkNext size={20} />}
        onClick={() => handleChangePageByType(currentPage, 'next')}
      />
    </div>
  );
};

export default Pagination;
