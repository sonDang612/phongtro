import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../components';
import { paths } from '../../utils/constants';
import icons from '../../utils/icons';
import * as actions from '../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.auth);

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
              <small>ten</small>
              <Button
                text="Đăng xuất"
                textColor="text-white"
                bgColor="bg-red-700"
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
