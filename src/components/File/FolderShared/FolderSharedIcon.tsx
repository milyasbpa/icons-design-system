import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFolderSharedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FolderSharedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFolderSharedIconProps) {
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
        d="M20 6.3833H12L10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.9 4.3833 2.01 5.2833 2.01 6.3833L2 18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM15 9.3833C16.1 9.3833 17 10.2833 17 11.3833C17 12.4833 16.1 13.3833 15 13.3833C13.9 13.3833 13 12.4833 13 11.3833C13 10.2833 13.9 9.3833 15 9.3833ZM19 17.3833H11V16.3833C11 15.0533 13.67 14.3833 15 14.3833C16.33 14.3833 19 15.0533 19 16.3833V17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
