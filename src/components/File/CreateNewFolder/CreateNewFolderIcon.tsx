import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICreateNewFolderIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CreateNewFolderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICreateNewFolderIconProps) {
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
        d="M20 6.3833H12L10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.89 4.3833 2.01 5.2733 2.01 6.3833L2 18.3833C2 19.4933 2.89 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM18 14.3833H16V16.3833C16 16.9333 15.55 17.3833 15 17.3833C14.45 17.3833 14 16.9333 14 16.3833V14.3833H12C11.45 14.3833 11 13.9333 11 13.3833C11 12.8333 11.45 12.3833 12 12.3833H14V10.3833C14 9.8333 14.45 9.3833 15 9.3833C15.55 9.3833 16 9.8333 16 10.3833V12.3833H18C18.55 12.3833 19 12.8333 19 13.3833C19 13.9333 18.55 14.3833 18 14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
