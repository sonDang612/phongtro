import React from 'react';
import { Button, InputForm } from '~/components';

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-5">
        <InputForm label="Số điện thoại" />
        <InputForm label="Mật khẩu" />
        <Button
          text="Đăng nhập"
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
        />
      </div>
      <div className="flex justify-between items-center mt-7">
        <span className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu
        </span>
        <span className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản mới
        </span>
      </div>
    </div>
  );
};

export default Login;