import { INav } from "@/interface";
import { Link } from "react-router-dom";
import CartIcon from "@/assets/Icons/CartIcon";
import UserIcon from "@/assets/Icons/UserIcon";
import SearchIcon from "@/assets/Icons/SearchIcon";
import Logo from "../Logo";

const Header = () => {
  const navList: INav[] = [
    {
      id: 0,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "SHOP",
      path: "/collections/all",
    },
    {
      id: 3,
      name: "BLOG",
      path: "/blog",
    },
    {
      id: 4,
      name: "CONTACT",
      path: "/contact",
    },
    {
      id: 5,
      name: "ABOUT",
      path: "/about",
    },
  ];
  return (
    <div className="h-[106px] flex items-center justify-between paddingX shadow-lg">
      <div className="text-4xl text-mainColor">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center gap-6">
          {navList.map((item) => {
            return (
              <li key={item.id}>
                <Link className="text-base font-normal" to={item.path}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center text-xs cursor-pointer gap-9">
        <span>
          <SearchIcon className="w-8 h-8 text-mainColor" />
        </span>
        <span>
          <UserIcon className="w-8 h-8 text-mainColor" />
        </span>
        <span>
          <CartIcon className="w-8 h-8 text-mainColor" />
        </span>
      </div>
    </div>
  );
};

export default Header;
