import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPhoneIphoneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhoneIphoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPhoneIphoneIconProps) {
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
        d="M15.5 1.3833H7.5C6.12 1.3833 5 2.5033 5 3.8833V20.8833C5 22.2633 6.12 23.3833 7.5 23.3833H15.5C16.88 23.3833 18 22.2633 18 20.8833V3.8833C18 2.5033 16.88 1.3833 15.5 1.3833ZM11.5 22.3833C10.67 22.3833 10 21.7133 10 20.8833C10 20.0533 10.67 19.3833 11.5 19.3833C12.33 19.3833 13 20.0533 13 20.8833C13 21.7133 12.33 22.3833 11.5 22.3833ZM16 18.3833H7V4.3833H16V18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
