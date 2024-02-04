import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, InputForm } from '~/components';
import * as actions from '~/store/actions/auth';
const Login = () => {
  const location = useLocation();
  const [payload, setPayload] = React.useState({
    name: '',
    phone: '',
    password: '',
  });
  const dispatch = useDispatch<any>();
  const [isRegister, setIsRegister] = React.useState(
    location.state?.isRegister
  );
  const handleSubmit = async () => {
    dispatch(actions.register(payload));
  };

  React.useEffect(() => {
    setIsRegister(location.state?.isRegister);
  }, [location.state?.isRegister]);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            label="HỌ TÊN"
            value={payload.name}
            setValue={setPayload}
            type="name"
          />
        )}
        <InputForm
          label="SỐ ĐIỆN THOẠI"
          value={payload.phone}
          setValue={setPayload}
          type="phone"
        />
        <InputForm
          label="MẬT KHẨU"
          value={payload.password}
          setValue={setPayload}
          type="password"
        />
        <Button
          text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
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
