import DefaultLayout from "@/layout/DefaultLayout";
import Slide from "@/component/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Grid from "@/component/Grid";
import Section from "@/component/Section";
import Product from "@/component/Product";
import SectionTitle from "@/component/SectionTitle";
import CategoryItem from "@/component/Category";
import { useProductContext } from "@/context/productContext";

const Product_Tshirt = [
  {
    id: 0,
    url: "/Images/tshirt1.png",
  },
  {
    id: 1,
    url: "/Images/tshirt2.png",
  },
  {
    id: 2,
    url: "/Images/tshirt3.png",
  },
  {
    id: 3,
    url: "/Images/tshirt4.png",
  },
  {
    id: 4,
    url: "/Images/tshirt5.png",
  },
];
const Home = () => {
  const { products } = useProductContext();
  return (
    <div>
      <DefaultLayout>
        <Slide />
        <section className="py-10">
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {Product_Tshirt.map((item) => {
                {
                  return (
                    <SwiperSlide className="swiper-effect" key={item.id}>
                      <img src={`${item.url}`} />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </>
        </section>
        {/* PRODUCT */}
        <Section>
          <SectionTitle title="DEVGENCI" subTitle="Satisfy You - Happy Us." />
        </Section>
        <Section className="pt-14 ">
          <Grid col="4" gap="4" row="4">
            {products.map((product) => {
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
          <div className="flex items-center justify-center mt-8">
            <button className="w-[150px] text-lg text-whiteColor h-[50px] rounded-lg bg-mainColor">
              Xem thêm
            </button>
          </div>
        </Section>
        <Section>
          <SectionTitle
            title="DANH MỤC ƯU THÍCH"
            subTitle="Danh mục được nhiều khách hàng yêu thích"
          />
          <Grid className="pt-14" col="3" gap="4">
            <CategoryItem
              slug="/collections/t-shirt"
              url="	https://theme.hstatic.net/200000305259/1001044366/14/banner_index_1.jpg?v=30"
            />
            <CategoryItem
              slug="/collections/shirt"
              url="https://theme.hstatic.net/200000305259/1001044366/14/banner_index_2.jpg?v=30"
            />
            <CategoryItem
              slug="/collections/sweater"
              url="https://theme.hstatic.net/200000305259/1001044366/14/banner_index_3.jpg?v=30"
            />
            <CategoryItem
              slug="/collections/hoodies"
              url="	https://theme.hstatic.net/200000305259/1001044366/14/banner_index_4.jpg?v=30"
            />
            <CategoryItem
              slug="/collections/shorts"
              url="	https://theme.hstatic.net/200000305259/1001044366/14/banner_index_5.jpg?v=30"
            />
            <CategoryItem
              slug="/collections/perfme"
              url="https://theme.hstatic.net/200000305259/1001044366/14/banner_index_6.jpg?v=30"
            />
          </Grid>
        </Section>
        <Section>
          <SectionTitle
            title="THƯƠNG HIỆU"
            subTitle="Thương hiệu nổi bật của chúng tôi"
          />
          <div className="flex items-center justify-center gap-10 pt-14">
            <h3 className="text-6xl font-bold text-mainColor">DEVGENCI</h3>
            <div className="w-[200px] flex items-center text-8xl font-black text-mainColor justify-center h-[200px] rounded-full border-2 border-mainColor border-solid">
              D
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </div>
  );
};

export default Home;
