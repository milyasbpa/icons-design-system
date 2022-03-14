import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDownloadIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DownloadIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDownloadIconProps) {
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
        d="M16.59 9.3833H15V4.3833C15 3.8333 14.55 3.3833 14 3.3833H10C9.45 3.3833 9 3.8333 9 4.3833V9.3833H7.41C6.52 9.3833 6.07 10.4633 6.7 11.0933L11.29 15.6833C11.68 16.0733 12.31 16.0733 12.7 15.6833L17.29 11.0933C17.92 10.4633 17.48 9.3833 16.59 9.3833ZM5 19.3833C5 19.9333 5.45 20.3833 6 20.3833H18C18.55 20.3833 19 19.9333 19 19.3833C19 18.8333 18.55 18.3833 18 18.3833H6C5.45 18.3833 5 18.8333 5 19.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
