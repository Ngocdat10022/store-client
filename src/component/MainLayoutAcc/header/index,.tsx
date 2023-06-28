import Logo from "@/assets/Icons/Logo";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <div className="max-w-[1200px] ml-auto mr-auto h-[80px] bg-whiteColor flex justify-between items-center  ">
      <div className="flex items-center justify-center gap-5">
        <Link to="/">
          <Logo className="w-[120px] text-red-500" />
        </Link>
        <h3 className="mt-2 text-2xl font-normal">Đăng Nhập</h3>
      </div>
      <span>
        <Link to="https://help.shopee.vn/portal" className="text-mainColor">
          Bạn cần giúp đỡ ?
        </Link>
      </span>
    </div>
  );
};

export default Header;
