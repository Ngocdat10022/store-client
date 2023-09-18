import StarIcon from "@/assets/Icons/StarIcon";
import Section from "@/component/Section";
import { IdetailProduct } from "@/interface/detaiProduct.interface";
import DefaultLayout from "@/layout/DefaultLayout";
import { getDetaiProduct } from "@/service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [dataDetail, setDataDetail] = useState<IdetailProduct>();
  const { slug } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const res = await getDetaiProduct(`${slug}`);
      setDataDetail(res.data);
    };
    getDetail();
  }, [slug]);
  return (
    <>
      <DefaultLayout>
        <Section className="pt-14">
          <div className="flex items-start gap-8">
            <div className="flex w-[40%] flex-col gap-2 items-center image-main">
              <div>
                <img alt="img" src={`${dataDetail?.imageUrl}`} />
              </div>
              <div className="flex items-center w-full gap-1 overflow-hidden ">
                {dataDetail?.ImageProduct &&
                  dataDetail?.ImageProduct.map((item, index) => {
                    return (
                      <img
                        className="w-[100px] h-[100px]"
                        alt="img"
                        src={`${item}`}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-col gap-3 info-product">
              <h3 className="text-xl font-medium uppercase">
                {`${dataDetail?.name}`}
              </h3>
              <span className="font-bold">SKU: 0121-1</span>
              <span className="flex gap-2 ">
                <StarIcon className="w-4 h-4 text-mainColor" />
                <StarIcon className="w-4 h-4 text-mainColor" />
                <StarIcon className="w-4 h-4 text-mainColor" />
                <StarIcon className="w-4 h-4 text-mainColor" />
                <StarIcon className="w-4 h-4 text-mainColor" />
              </span>
              <div>
                <span className="text-3xl font-semibold text-primary">
                  {`${dataDetail?.initial_price}`}
                </span>
                <span className="text-lg text-decoration">{`${dataDetail?.discounted_price}`}</span>
              </div>
              <div>
                <h3 className="font-bold">Kích thước</h3>
                <div className="flex gap-2">
                  <div className="font-bold bg-lightGrey flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    M
                  </div>
                  <div className="font-bold bg-lightGrey flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    L
                  </div>
                  <div className="font-bold bg-lightGrey flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    XL
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <span className="text-lg font-normal text-blackColor">
                  Số lượng
                </span>
                <div className="border-solid border-[1px] border-greyColor">
                  <button className="px-3 py-2 text-xl bg-lightGrey">-</button>
                  <input
                    value={3}
                    className="text-center w-[80px] border-none outline-none"
                  />
                  <button className="px-3 py-2 text-xl bg-lightGrey">+</button>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <button className="px-8 py-4 text-base font-semibold text-center rounded-lg bg-mainColor text-whiteColor">
                  Thêm giỏ hàng
                </button>
                <button className="px-8 py-4 text-base font-semibold text-center rounded-lg bg-mainColor text-whiteColor">
                  Mua ngay
                </button>
              </div>
            </div>
            <div className="w-[30%] similar-product">
              <h3 className="w-full px-5 py-2 text-xl text-center text-blackColor bg-lightGrey">
                Sản Phẩm Liên Quan
              </h3>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </>
  );
};

export default DetailPage;
