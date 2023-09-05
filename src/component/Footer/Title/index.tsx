interface IPropsTitle {
  name: string;
}
const Title = ({ name }: IPropsTitle) => {
  return (
    <h3 className="relative text-xl font-bold uppercase title-footer text-whiteColor ">
      {name}
    </h3>
  );
};

export default Title;
