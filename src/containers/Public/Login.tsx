import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, InputForm } from '~/components';

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = React.useState(
    location.state?.isRegister
  );

  React.useEffect(() => {
    setIsRegister(location.state?.isRegister);
  }, [location.state?.isRegister]);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && <InputForm label="HỌ TÊN" />}
        <InputForm label="SỐ ĐIỆN THOẠI" />
        <InputForm label="MẬT KHẨU" />
        <Button
          text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
        />
      </div>
      <div className="flex justify-between items-center mt-7">
        {isRegister ? (
          <small>
            Bạn chưa có tài khoản?
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            {' '}
            <span className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </span>
            <span
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Tạo tài khoản mới
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
