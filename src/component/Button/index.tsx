interface IPropsButton {
  name: string;
  type: "button" | "submit" | "reset";
  className: string;
  isbtnSocial?: boolean;
  urlImage?: string;
  onClick?: () => void;
}
const Button = ({
  className,
  name,
  type,
  isbtnSocial,
  urlImage,
  onClick,
}: IPropsButton) => {
  return (
    <>
      {isbtnSocial ? (
        <button
          onClick={onClick}
          className={`bg-transparent flex items-center justify-center gap-2 border-[1px] border-solid border-greyColor text-blackColor   px-2 py-2  ${className}`}
          type={type}
        >
          <img className="w-5 h-5" src={urlImage} alt="facebook" />
          {name}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`bg-mainColor border-none text-whiteColor px-2 py-2  ${className}`}
          type={type}
        >
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
