import DownIcon from "@/assets/Icons/DownIcon";
import Grid from "@/component/Grid";
import Product from "@/component/Product";
import Section from "@/component/Section";
import { product } from "@/interface";
import { ICategory } from "@/interface/category.interface";
import DefaultLayout from "@/layout/DefaultLayout";
import { getProductByCart } from "@/service";
import { getCategory } from "@/service/category";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShopPage = () => {
  const { slug } = useParams();
  const [productByCat, setProductByCat] = useState<product[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await getProductByCart(`${slug}`);
        setProductByCat(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProduct();
  }, [slug]);

  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await getCategory();
        setCategory(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCat();
  }, []);

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
              <div className="flex items-center justify-around p-4 border-b-2 border-solid cursor-pointer border-blackColor bg-lightGrey">
                <h3 className="text-lg">Danh Mục Sản Phẩm</h3>
                <span className="text-2xl font-bold">+</span>
              </div>
              <div className="w-full p-4 bg-lightGrey">
                <ul className="flex flex-col gap-2">
                  {category.map((item) => {
                    return (
                      <li key={item.idCat}>
                        <Link
                          className="text-lg font-medium text-mainColor"
                          to={`/collections/${item.slug}`}
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
              <div className="flex items-center justify-between w-full p-4 mb-8 border-b-2 border-solid cursor-pointer first-letter: border-blackColor bg-lightGrey">
                <h3 className="text-lg">Tất cả sản phẩm</h3>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">Sắp Xếp theo:</h3>
                  <div className="flex items-center gap-4 px-2 border-2 border-solid bg-whiteColor dropdown border-blackColor">
                    <span className="font-semibold">Mới Nhất</span>
                    <DownIcon />
                  </div>
                </div>
              </div>
              {productByCat.length ? (
                <Grid col="4" gap="4">
                  {productByCat.map((product) => {
                    const {
                      discount_percentage,
                      discounted_price,
                      id,
                      imageUrl,
                      initial_price,
                      name,
                      slug,
                    } = product;
                    return (
                      <Product
                        key={id}
                        slug={slug}
                        ulrImage={imageUrl}
                        title={name}
                        initialPrice={initial_price}
                        discountedPrice={discounted_price}
                        discountPercentage={discount_percentage}
                      />
                    );
                  })}
                </Grid>
              ) : (
                <div className="text-3xl text-center text-mainColor mt-9">
                  Không có sản phẩm{" "}
                </div>
              )}
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </>
  );
};

export default ShopPage;
