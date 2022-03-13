import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPointOfSaleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PointOfSaleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPointOfSaleIconProps) {
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
        d="M2 10.3833C2 10.9333 2.45 11.3833 3 11.3833H20C20.55 11.3833 21 10.9333 21 10.3833C21 9.8333 20.55 9.3833 20 9.3833H3C2.45 9.3833 2 9.8333 2 10.3833ZM3 15.3833H6C6.55 15.3833 7 14.9333 7 14.3833C7 13.8333 6.55 13.3833 6 13.3833H3C2.45 13.3833 2 13.8333 2 14.3833C2 14.9333 2.45 15.3833 3 15.3833ZM10 15.3833H13C13.55 15.3833 14 14.9333 14 14.3833C14 13.8333 13.55 13.3833 13 13.3833H10C9.45 13.3833 9 13.8333 9 14.3833C9 14.9333 9.45 15.3833 10 15.3833ZM17 15.3833H20C20.55 15.3833 21 14.9333 21 14.3833C21 13.8333 20.55 13.3833 20 13.3833H17C16.45 13.3833 16 13.8333 16 14.3833C16 14.9333 16.45 15.3833 17 15.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
