interface ISectionTitle {
  title: string;
  subTitle: string;
}

const SectionTitle = ({ title, subTitle }: ISectionTitle) => {
  return (
    <div className="relative mt-20 wrapper-product ">
      <div className="absolute top-0 z-10 text-center product-title">
        <h3 className="text-4xl ">{title}</h3>
        <span className="text-2xl font-normal text-greyColor">{subTitle}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
