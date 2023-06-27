import Button from "@/component/Button";
import FieldInput from "@/component/FieldInput";
import MainLayoutAcc from "@/component/MainLayoutAcc";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleSignWithGoogle, handleSignWithFacebook, accessToken } =
    useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate("/");
  });
  return (
    <MainLayoutAcc>
      <div className="bg-bgaccount  bg-no-repeat bg-cover h-[600px] pr-[300px]  flex justify-end items-center ">
        <form className="p-4 w-[400px] h-auto  bg-whiteColor">
          <h3 className="text-2xl text-center">Đăng Nhập</h3>
          <div className="flex flex-col justify-center w-full gap-8 my-10">
            <FieldInput
              type="text"
              placeholder="Số điện thoại"
              name="numberphone"
            />
            <FieldInput
              type="password"
              placeholder="Mật khẩu"
              name="password"
            />
          </div>
          <Button type="submit" name="Đăng Nhập" className="w-[100%] " />
          <div className="flex items-center justify-between w-[100%] mt-5 text-xs text-blueColor">
            <span className="cursor-pointer">Quên mật khẩu</span>
            <span className="cursor-pointer">Đăng nhập với SMS</span>
          </div>
          <div className="relative text-center py-4 text-greyColor after:absolute after:w-[40%] after:h-[2px] after:bg-greyColor after:top-1/2 after:right-0 before:absolute before:w-[40%] before:h-[2px] before:bg-greyColor before:top-1/2 before:left-0 ">
            Hoặc
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button
              type="button"
              name="Facebook"
              className="w-[100%] "
              isbtnSocial={true}
              urlImage="/Facebook_Logo.webp"
              onClick={handleSignWithFacebook}
            />
            <Button
              type="button"
              name="Google"
              className="w-[100%] "
              isbtnSocial={true}
              urlImage="/google.png"
              onClick={handleSignWithGoogle}
            />
          </div>
          <div className="py-8 text-center">
            <span className="text-greyColor">Bạn mới biết đến Shopee?</span>
            <Link className="text-mainColor" to="/register">
              Đăng Ký
            </Link>
          </div>
        </form>
      </div>
    </MainLayoutAcc>
  );
};

export default Login;
