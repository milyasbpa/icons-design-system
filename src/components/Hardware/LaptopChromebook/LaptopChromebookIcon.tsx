import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILaptopChromebookIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LaptopChromebookIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILaptopChromebookIconProps) {
  const colorCode = colorDatas[color];

  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 18.3833H22V5.3833C22 4.2833 21.1 3.3833 20 3.3833H4C2.9 3.3833 2 4.2833 2 5.3833V18.3833H1C0.45 18.3833 0 18.8333 0 19.3833C0 19.9333 0.45 20.3833 1 20.3833H23C23.55 20.3833 24 19.9333 24 19.3833C24 18.8333 23.55 18.3833 23 18.3833ZM13.5 18.3833H10.5C10.22 18.3833 10 18.1633 10 17.8833C10 17.6033 10.22 17.3833 10.5 17.3833H13.5C13.78 17.3833 14 17.6033 14 17.8833C14 18.1633 13.78 18.3833 13.5 18.3833ZM20 15.3833H4V6.3833C4 5.8333 4.45 5.3833 5 5.3833H19C19.55 5.3833 20 5.8333 20 6.3833V15.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
