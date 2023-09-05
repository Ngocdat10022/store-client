import React from "react";

interface IPropsGrid {
  children: React.ReactNode;
  col: string;
  gap: string;
  row?: string;
  className?: string;
}
const Grid = ({ children, col, gap, row, className }: IPropsGrid) => {
  return (
    <div className={`grid grid-cols-4 gap-4 ${className} `}>{children}</div>
  );
};
// grid-cols-${col} gap-${gap} grid-rows-${row}
export default Grid;
