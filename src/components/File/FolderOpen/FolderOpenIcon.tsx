import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IFolderOpenIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FolderOpenIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IFolderOpenIconProps) {
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
        d="M20 6.3833H12L10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.9 4.3833 2.01 5.2833 2.01 6.3833L2 18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM19 18.3833H5C4.45 18.3833 4 17.9333 4 17.3833V9.3833C4 8.8333 4.45 8.3833 5 8.3833H19C19.55 8.3833 20 8.8333 20 9.3833V17.3833C20 17.9333 19.55 18.3833 19 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
