import Button from "@/component/Button";
import MainLayoutAcc from "@/component/MainLayoutAcc";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import ArrowLeft from "@/assets/Icons/ArrowLeft";

const Register = () => {
  ///state
  const {
    handleSignWithGoogle,
    handleSignWithFacebook,
    setPhoneNumber,
    phoneNumber,
    accessToken,
    showOtp,
    setShowOtp,
    otp,
    loading,
    setOtp,
    handleSignInWithNumberPhone,
    verifyOtp,
  } = useAuthContext();
  console.log("phoneNumber", phoneNumber);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate("/");
  });
  return (
    <MainLayoutAcc>
      <>
        {showOtp ? (
          <div className="show-otp bg-whiteColor flex items-center justify-center w-[100%] h-[800px]">
            <div className="form-otp max-w-[500px] h-[600px] flex items-center flex-col shadow-xl rounded-md px-20 py-6 relative">
              <span
                className="absolute cursor-pointer left-5 top-5 text-mainColor"
                onClick={() => setShowOtp(false)}
              >
                <ArrowLeft />
              </span>
              <h3 className="text-xl font-normal ">Nhập mã xác minh</h3>
              <span className="mt-8 text-sm">
                Mã xác thực sẽ được gửi đến SMS đến
              </span>
              <span className="text-lg">{phoneNumber || ""}</span>
              <div className="py-16">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  className="otp-input"
                />
              </div>
              <div className="flex flex-col items-center py-5">
                <span className="text-sm ">Bạn vẫn chưa nhận được?</span>
                <span className="flex items-center gap-1 text-sm">
                  <span className="cursor-pointer text-mainColor">Gửi lại</span>
                  hoặc
                  <span className="cursor-pointer text-mainColor">
                    Gửi lại bằn phương thức khác
                  </span>
                </span>
              </div>
              <Button
                className="bg-mainColor w-[100%]"
                name="Xác nhận"
                type="button"
                isbtnSocial={false}
                onClick={verifyOtp}
              ></Button>
            </div>
          </div>
        ) : (
          <div className="bg-bgaccount bg-no-repeat bg-cover w-[100%] h-[600px] pr-[300px]  flex justify-end items-center ">
            <form className="p-4 w-[400px] h-auto  bg-whiteColor">
              <h3 className="text-2xl text-center">Đăng Kí</h3>
              <div className="flex flex-col justify-center w-full gap-8 my-10">
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
              <Button
                type="submit"
                name={`${loading ? "Loading..." : "Đăng Kí"}`}
                className="w-[100%] "
                onClick={handleSignInWithNumberPhone}
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
                  className="w-[100%] "
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
        )}
      </>
    </MainLayoutAcc>
  );
};

export default Register;
