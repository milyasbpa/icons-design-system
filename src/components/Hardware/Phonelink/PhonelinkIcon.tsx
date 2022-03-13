import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPhonelinkIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhonelinkIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPhonelinkIconProps) {
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
        d="M4 7.3833C4 6.8333 4.45 6.3833 5 6.3833H21C21.55 6.3833 22 5.9333 22 5.3833C22 4.8333 21.55 4.3833 21 4.3833H4C2.9 4.3833 2 5.2833 2 6.3833V17.3833H1.5C0.67 17.3833 0 18.0533 0 18.8833C0 19.7133 0.67 20.3833 1.5 20.3833H12.5C13.33 20.3833 14 19.7133 14 18.8833C14 18.0533 13.33 17.3833 12.5 17.3833H4V7.3833ZM23 8.3833H17C16.45 8.3833 16 8.8333 16 9.3833V19.3833C16 19.9333 16.45 20.3833 17 20.3833H23C23.55 20.3833 24 19.9333 24 19.3833V9.3833C24 8.8333 23.55 8.3833 23 8.3833ZM22 17.3833H18V10.3833H22V17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
