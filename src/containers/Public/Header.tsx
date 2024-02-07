import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useCurrentUser from 'src/react-query/useCurrentUser';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../components';
import * as actions from '../../store/actions/auth';
import { paths } from '../../utils/constants';
import icons from '../../utils/icons';
const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { data: user } = useCurrentUser();
  const goLogin = React.useCallback(
    (isRegister?: boolean) => {
      navigate(paths.LOGIN, { state: { isRegister } });
    },
    [navigate]
  );

  return (
    <div className="w-3/4 flex items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          {isLoggedIn ? (
            <>
              <div className="flex flex-row gap-[10px] items-center mr-[30px]">
                <img
                  src="/default-user.png"
                  alt="avatar-user"
                  className="rounded-full size-[40px]"
                />
                <div>
                  <small className="text-[16.8px] text-[#333]">
                    Xin chào&nbsp;
                    <small className="font-bold text-[16.8px] text-[#333]">
                      {user?.name}
                    </small>
                  </small>
                  <p className="text-[14px] text-[#333] text-center">
                    SĐT: {user?.phone}
                  </p>
                </div>
              </div>
              <Button
                text="Quản lý tài khoản"
                textColor="text-white"
                bgColor="bg-secondary1"
                onClick={() => dispatch(actions.logout())}
              />
              <Button
                text="Đăng tin mới"
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
              />
            </>
          ) : (
            <>
              <small>Phongtro123.com xin chào!!</small>
              <Button
                text="Đăng nhập"
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text="Đăng ký"
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
              <Button
                text="Đăng tin mới"
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
