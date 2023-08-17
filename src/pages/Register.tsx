import Button from "@/component/Button";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import FieldInput from "@/component/FieldInput";
import { toast } from "react-toastify";
import { IFormRegister } from "@/interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "@/schema";
import { requestAuthRegister } from "@/service/api";

const Register = () => {
  const { handleSignWithGoogle, handleSignWithFacebook, accessToken, loading } =
    useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate("/");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(schemaRegister),
  });
  console.log("errors", errors);
  const handleRegister = async (values: any) => {
    if (values?.password.trim() === values?.confirmPassword.trim()) {
      delete values?.confirmPassword;
      try {
        console.log("values", values);
        const res = await requestAuthRegister(values);
        if (res?.data) {
          toast.success(`${res?.data}`, {
            position: "top-right",
          });
          navigate("/login");
        }
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error?.message}`);
        console.log("error", error);
      }
    } else {
      toast.error("Password not match");
    }
  };
  return (
    <>
      <div className=" bg-no-repeat bg-cover w-[100%] h-[100vh]  flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="p-4 w-[400px] h-auto  bg-whiteColor"
        >
          <div id="recaptcha-container"></div>
          <h3 className="text-2xl text-center">Đăng Kí</h3>
          <div className="flex flex-col justify-center w-full gap-8 my-10">
            <FieldInput
              register={register}
              type="text"
              placeholder="Họ"
              name="firstName"
              messageError={errors?.firstName?.message}
            />
            <FieldInput
              register={register}
              type="text"
              placeholder="tên"
              name="lastName"
              messageError={errors?.lastName?.message}
            />
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
            <FieldInput
              register={register}
              type="password"
              placeholder="Xác Minh Mật Khẩu"
              name="confirmPassword"
              messageError={errors?.confirmPassword?.message}
            />
          </div>
          <Button
            type="submit"
            name={`${loading ? "Loading..." : "Đăng Kí"}`}
            className="w-[100%] "
          />
          <div className="relative text-center py-4 text-greyColor after:absolute after:w-[40%] after:h-[1px] after:bg-greyColor after:top-1/2 after:right-0 before:absolute before:w-[40%] before:h-[1px] before:bg-greyColor before:top-1/2 before:left-0 ">
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
              className="w-[100%]"
              isbtnSocial={true}
              urlImage="/google.png"
              onClick={handleSignWithGoogle}
            />
          </div>
          <div className="py-8 text-center">
            <span className="text-greyColor">Bạn mới biết đến Shopee?</span>
            <Link className="text-mainColor" to="/login">
              Đăng Nhập
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
