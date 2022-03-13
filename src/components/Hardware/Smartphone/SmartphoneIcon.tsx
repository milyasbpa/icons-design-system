import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRouterIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SmartphoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRouterIconProps) {
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
        d="M17 1.3933L7 1.3833C5.9 1.3833 5 2.2833 5 3.3833V21.3833C5 22.4833 5.9 23.3833 7 23.3833H17C18.1 23.3833 19 22.4833 19 21.3833V3.3833C19 2.2833 18.1 1.3933 17 1.3933ZM17 19.3833H7V5.3833H17V19.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
