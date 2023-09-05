import DownIcon from "@/assets/Icons/DownIcon";
import Grid from "@/component/Grid";
import Product from "@/component/Product";
import Section from "@/component/Section";
import { INav } from "@/interface";
import DefaultLayout from "@/layout/DefaultLayout";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const navList: INav[] = [
    {
      id: 0,
      name: " T-SHIRTS",
      path: "/",
    },
    {
      id: 1,
      name: " SHIRTS",
      path: "/",
    },
    {
      id: 2,
      name: " SWEATER",
      path: "/",
    },
    {
      id: 3,
      name: " HOODIES",
      path: "/",
    },
    {
      id: 4,
      name: " SHORT",
      path: "/",
    },
    {
      id: 5,
      name: "PERFUME",
      path: "/",
    },
    {
      id: 6,
      name: " JACKET",
      path: "/",
    },
    {
      id: 7,
      name: "ACCESSORIES",
      path: "/",
    },
    {
      id: 8,
      name: " POLO ",
      path: "/",
    },
    {
      id: 9,
      name: " PANTS",
      path: "/",
    },
  ];
  return (
    <>
      <DefaultLayout>
        <div className="banner">
          <img
            alt="banner"
            src="https://theme.hstatic.net/200000305259/1001044366/14/collection_image.jpg?v=30"
          />
        </div>
        <Section className="pt-14">
          <div className="flex items-start gap-7">
            <div className="category w-[25%]">
              <div className="flex items-center justify-around p-4 border-b-2 border-solid cursor-pointer border-blackColor bg-greyColor">
                <h3 className="text-lg">Danh Mục Sản Phẩm</h3>
                <span className="text-2xl font-bold">+</span>
              </div>
              <div className="w-full p-4 bg-greyColor">
                <ul className="flex flex-col gap-2">
                  {navList.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          className="text-lg font-medium text-mainColor"
                          to={item.path}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="product w-[75%]">
              <div className="flex items-center justify-between w-full p-4 mb-8 border-b-2 border-solid cursor-pointer first-letter: border-blackColor bg-greyColor">
                <h3 className="text-lg">Tất cả sản phẩm</h3>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">Sắp Xếp theo:</h3>
                  <div className="flex items-center gap-4 px-2 border-2 border-solid bg-whiteColor dropdown border-blackColor">
                    <span className="font-semibold">Mới Nhất</span>
                    <DownIcon />
                  </div>
                </div>
              </div>
              <Grid col="4" gap="4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </Grid>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </>
  );
};

export default ShopPage;
