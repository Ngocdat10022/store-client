import { Link } from "react-router-dom";

interface IPropCat {
  url: string;
  slug: string;
}
const CategoryItem = ({ url, slug }: IPropCat) => {
  return (
    <div className="">
      <Link to={slug}>
        <img
          className="shadow-xl cursor-pointer category-img"
          alt="category-img"
          src={`${url}`}
        />
      </Link>
    </div>
  );
};

export default CategoryItem;
