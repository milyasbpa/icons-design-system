import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPhoneAndroidIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhoneAndroidIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPhoneAndroidIconProps) {
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
        d="M16 1.3833H8C6.34 1.3833 5 2.7233 5 4.3833V20.3833C5 22.0433 6.34 23.3833 8 23.3833H16C17.66 23.3833 19 22.0433 19 20.3833V4.3833C19 2.7233 17.66 1.3833 16 1.3833ZM13.5 21.3833H10.5C10.22 21.3833 10 21.1633 10 20.8833C10 20.6033 10.22 20.3833 10.5 20.3833H13.5C13.78 20.3833 14 20.6033 14 20.8833C14 21.1633 13.78 21.3833 13.5 21.3833ZM17 18.3833H7V4.3833H17V18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
