import Button from "@/component/Button";
import FieldInput from "@/component/FieldInput";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IFormLogin } from "@/interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "@/schema";
import { requestAuthLogin } from "@/service/auth";
import { toast } from "react-toastify";
const Login = () => {
  const {
    handleSignWithGoogle,
    handleSignWithFacebook,
    accessToken,
    setAccessToken,
    setTokenFromStorage,
    setUser,
    setUserFromStorage,
  } = useAuthContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate("/");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const handleLogin = async (values: any) => {
    try {
      const res = await requestAuthLogin(values);
      const data = res?.data;
      console.log("data", data);
      if (data) {
        const accessToken = data?.accessToken;
        const user = data?.findUser;
        setTokenFromStorage(accessToken);
        setAccessToken(accessToken);
        setUser(user);
        setUserFromStorage(user);
        toast.success("Login successfully");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(`${error?.response?.data?.message || error?.message} `);
      console.log("error", error);
    }
  };
  return (
    <div className="bg-no-repeat bg-cover h-[100vh] flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="p-4 w-[400px] h-auto  bg-whiteColor"
      >
        <div id="recaptcha-container"></div>
        <h3 className="text-2xl text-center">Đăng Nhập</h3>
        <div className="flex flex-col justify-center w-full gap-8 my-10">
          <FieldInput
            register={register}
            type="text"
            placeholder="Email"
            name="email"
            messageError={errors?.email?.message}
          />

          <FieldInput
            register={register}
            type="password"
            placeholder="Mật khẩu"
            name="password"
            messageError={errors?.password?.message}
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
  );
};

export default Login;
