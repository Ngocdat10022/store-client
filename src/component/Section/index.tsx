import React from "react";

interface IPropsSection {
  children: React.ReactNode;
  className?: string;
}
const Section = ({ children, className }: IPropsSection) => {
  return <section className={`${className} paddingX`}>{children}</section>;
};

export default Section;
