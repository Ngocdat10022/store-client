import StarIcon from "@/assets/Icons/StarIcon";
import { IPropsProduct } from "@/interface";
import { Link } from "react-router-dom";

const Product = ({
  slug,
  ulrImage,
  title,
  discountPercentage,
  discountedPrice,
  initialPrice,
}: IPropsProduct) => {
  return (
    <>
      <div className="relative shadow-lg product">
        <div className="cursor-pointer">
          <Link to={`/product/${slug}`}>
            <img className="w-full" alt="product" src={`${ulrImage}`} />
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-2 p-4">
          <h3 className="mb-5 text-lg font-medium cursor-pointer">
            <Link to={`/product/${slug}`}>{title}</Link>
          </h3>
          <div className="flex flex-col flex-1 ">
            <span className="text-greyColor">DEVGENCI</span>
            <span className="flex gap-2 ">
              <StarIcon className="w-4 h-4 text-mainColor" />
              <StarIcon className="w-4 h-4 text-mainColor" />
              <StarIcon className="w-4 h-4 text-mainColor" />
              <StarIcon className="w-4 h-4 text-mainColor" />
              <StarIcon className="w-4 h-4 text-mainColor" />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 text-lg border-t border-solid border-greyColor product-price ">
          <span className="text-primary"> {`${initialPrice}₫`}</span>
          <span className="text-decoration text-greyColor">
            {`${discountedPrice}₫`}
          </span>
        </div>
        <div className="absolute w-[40px] h-[40px] rounded-full bg-primary top-3 right-3 text-center leading-[40px] text-whiteColor">
          {`${discountPercentage}%`}
        </div>
      </div>
    </>
  );
};

export default Product;
