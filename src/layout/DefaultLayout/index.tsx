import React from "react";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
interface IPropLayout {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: IPropLayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
