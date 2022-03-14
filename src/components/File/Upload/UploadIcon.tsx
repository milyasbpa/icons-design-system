import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IUploadIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function UploadIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IUploadIconProps) {
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
        d="M10 16.3833H14C14.55 16.3833 15 15.9333 15 15.3833V10.3833H16.59C17.48 10.3833 17.93 9.30327 17.3 8.67327L12.71 4.08327C12.32 3.69327 11.69 3.69327 11.3 4.08327L6.71 8.67327C6.08 9.30327 6.52 10.3833 7.41 10.3833H9V15.3833C9 15.9333 9.45 16.3833 10 16.3833ZM6 18.3833H18C18.55 18.3833 19 18.8333 19 19.3833C19 19.9333 18.55 20.3833 18 20.3833H6C5.45 20.3833 5 19.9333 5 19.3833C5 18.8333 5.45 18.3833 6 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
