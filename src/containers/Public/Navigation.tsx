import React from 'react';
import { NavLink } from 'react-router-dom';
import { apiGetCategories } from 'src/services/category';

const Navigation = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = (await apiGetCategories()) as any;

      if (response?.data.err === 0) {
        setCategories(response.data?.response);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-[40px] text-white bg-secondary1">
      <div className="w-3/4 flex flex-row">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `${
              isActive ? 'bg-red-500' : 'transparent'
            } text-white text-[14px] font-bold px-[12px] cursor-pointer hover:bg-red-500 items-center justify-center flex overflow-hidden text-ellipsis whitespace-nowrap leading-[40px]`
          }
        >
          Trang chủ
        </NavLink>
        {categories.map((category: any, index) => (
          <NavLink
            key={index}
            to={category.label}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-red-500' : 'transparent'
              } text-white text-[14px] font-bold px-[12px] cursor-pointer hover:bg-red-500 items-center justify-center flex overflow-hidden text-ellipsis whitespace-nowrap leading-[40px]`
            }
          >
            {category?.value}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
