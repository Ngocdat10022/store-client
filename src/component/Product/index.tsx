import StarIcon from "@/assets/Icons/StarIcon";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="relative shadow-lg product">
        <div className="cursor-pointer">
          <Link to="/product/012-sport-t-shirt-white-black">
            <img className="w-full" alt="product" src="/Images/tshirt-2.jpg" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="mb-5 text-lg font-medium cursor-pointer">
            <Link to="/product/012-sport-t-shirt-white-black">
              020 Sport Line T-Shirt/White-Black
            </Link>
          </h3>
          <span className="text-greyColor">DEVGENCI</span>
          <span className="flex gap-2 ">
            <StarIcon className="w-4 h-4 text-mainColor" />
            <StarIcon className="w-4 h-4 text-mainColor" />
            <StarIcon className="w-4 h-4 text-mainColor" />
            <StarIcon className="w-4 h-4 text-mainColor" />
            <StarIcon className="w-4 h-4 text-mainColor" />
          </span>
        </div>
        <div className="flex items-center justify-between p-4 text-lg border-t border-solid border-greyColor product-price ">
          <span className="text-primary">₫125,000</span>
          <span className="text-decoration text-greyColor">₫390,000</span>
        </div>
        <div className="absolute w-[40px] h-[40px] rounded-full bg-primary top-3 right-3 text-center leading-[40px] text-whiteColor">
          60%
        </div>
      </div>
    </>
  );
};

export default Product;
