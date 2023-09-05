interface IPropCat {
  url: string;
}
const CategoryItem = ({ url }: IPropCat) => {
  return (
    <div className="">
      <img
        className="shadow-xl cursor-pointer category-img"
        alt="category-img"
        src={`${url}`}
      />
    </div>
  );
};

export default CategoryItem;
