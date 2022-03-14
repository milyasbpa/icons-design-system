import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFolderIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FolderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFolderIconProps) {
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
        d="M10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.9 4.3833 2.01 5.2833 2.01 6.3833L2 18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833H12L10.59 4.9733Z"
        fill={colorCode}
      />
    </svg>
  );
}
