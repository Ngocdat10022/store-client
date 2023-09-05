import Grid from "../Grid";
import Section from "../Section";
import Title from "./Title";

const Footer = () => {
  return (
    <div className="p-10 mt-10 bg-footer">
      <Section>
        <Grid col="4" gap="4">
          <div className="flex flex-col gap-4">
            <Title name="THÔNG TIN LIÊN HỆ :" />
            <ul className="flex flex-col gap-4">
              <li className="text-base font-bold text-greyColor">
                Phone: 037 335 7405.
              </li>
              <li className="text-base font-bold text-greyColor">
                Email:vergency.contact@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Title name="TCHÍNH SÁCH HỖ TRỢ:" />
            <ul className="flex flex-col gap-4">
              <li className="text-base font-bold text-greyColor">Tìm kiếm</li>
              <li className="text-base font-bold text-greyColor">Giới thiệu</li>
              <li className="text-base font-bold text-greyColor">
                Chính sách đổi trả
              </li>
              <li className="text-base font-bold text-greyColor">
                Chính sách bảo mật
              </li>
              <li className="text-base font-bold text-greyColor">
                Điều khoản dịch vụ
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Title name="THÔNG TIN LIÊN KẾT:" />
            <ul className="flex flex-col gap-4">
              <li className="text-base font-bold text-greyColor">
                Hãy kết nối với chúng tôi.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Title name="THEO DÕI FANPAGE CHÚNG TÔI ĐỂ CẬP NHẬT XU HƯỚNG THỜI TRANG HOT NHẤT:" />
            <ul className="flex flex-col gap-4"></ul>
          </div>
        </Grid>
      </Section>
    </div>
  );
};

export default Footer;
