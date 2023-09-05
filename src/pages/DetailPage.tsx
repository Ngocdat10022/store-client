import StarIcon from "@/assets/Icons/StarIcon";
import Section from "@/component/Section";
import DefaultLayout from "@/layout/DefaultLayout";

const DetailPage = () => {
  return (
    <>
      <DefaultLayout>
        <Section className="pt-14">
          <div className="flex items-start gap-8">
            <div className="flex w-[40%] flex-col gap-2 items-center image-main">
              <div>
                <img
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />
              </div>
              <div className="flex items-center w-full gap-1 overflow-hidden ">
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />{" "}
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />{" "}
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />{" "}
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />{" "}
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />{" "}
                <img
                  className="w-[100px] h-[100px]"
                  alt="img"
                  src="https://product.hstatic.net/200000305259/product/tee_sports_2_52c9998635304a3c852140c8365c63ee_master.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 info-product">
              <h3 className="text-xl font-medium uppercase">
                012 SPORT T-SHIRT/WHITE-BLACK
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
                  ₫125,000
                </span>
                <span className="text-lg text-decoration">₫390,000</span>
              </div>
              <div>
                <h3 className="font-bold">Kích thước</h3>
                <div className="flex gap-2">
                  <div className="font-bold bg-greyColor flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    M
                  </div>
                  <div className="font-bold bg-greyColor flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    L
                  </div>
                  <div className="font-bold bg-greyColor flex items-center justify-center text-blackColor w-[40px] h-[40px]">
                    XL
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <span className="text-lg font-normal text-blackColor">
                  Số lượng
                </span>
                <div className="border-solid border-[1px] border-greyColor">
                  <button className="px-3 py-2 text-xl bg-greyColor">-</button>
                  <input
                    value={3}
                    className="text-center w-[80px] border-none outline-none"
                  />
                  <button className="px-3 py-2 text-xl bg-greyColor">+</button>
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
              <h3 className="w-full px-5 py-2 text-xl text-center text-blackColor bg-greyColor">
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
