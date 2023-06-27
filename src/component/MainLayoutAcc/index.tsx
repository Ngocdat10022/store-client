import React from "react";
import Header from "./header/index,";
import Footer from "../Footer";
interface IPropsMainLayout {
  children: React.ReactNode;
}
const MainLayoutAcc = ({ children }: IPropsMainLayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoutAcc;
