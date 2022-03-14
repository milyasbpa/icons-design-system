import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRequestQuoteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RequestQuoteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRequestQuoteIconProps) {
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
        d="M19.41 7.7933L14.58 2.9633C14.21 2.5933 13.7 2.3833 13.17 2.3833H6C4.9 2.3833 4.01 3.2833 4.01 4.3833L4 20.3833C4 21.4833 4.89 22.3833 5.99 22.3833H18C19.1 22.3833 20 21.4833 20 20.3833V9.2133C20 8.6833 19.79 8.1733 19.41 7.7933ZM14 13.3833C14.55 13.3833 15 13.8333 15 14.3833V17.3833C15 17.9333 14.55 18.3833 14 18.3833H13C13 18.9333 12.55 19.3833 12 19.3833C11.45 19.3833 11 18.9333 11 18.3833H10C9.45 18.3833 9 17.9333 9 17.3833C9 16.8333 9.45 16.3833 10 16.3833H13V15.3833H10C9.45 15.3833 9 14.9333 9 14.3833V11.3833C9 10.8333 9.45 10.3833 10 10.3833H11C11 9.8333 11.45 9.3833 12 9.3833C12.55 9.3833 13 9.8333 13 10.3833H14C14.55 10.3833 15 10.8333 15 11.3833C15 11.9333 14.55 12.3833 14 12.3833H11V13.3833H14ZM14 8.3833C13.45 8.3833 13 7.9333 13 7.3833V3.8833L17.5 8.3833H14Z"
        fill={colorCode}
      />
    </svg>
  );
}
