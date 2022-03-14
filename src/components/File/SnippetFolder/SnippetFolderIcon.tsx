import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISnippetFolderIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SnippetFolderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISnippetFolderIconProps) {
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
        d="M15.88 10.8833L17.5 12.5033V15.8833H14.5V10.8833H15.88ZM22 8.3833V18.3833C22 19.4833 21.1 20.3833 20 20.3833H4C2.9 20.3833 2 19.4833 2 18.3833L2.01 6.3833C2.01 5.2833 2.9 4.3833 4 4.3833H9.17C9.7 4.3833 10.21 4.5933 10.58 4.9733L12 6.3833H20C21.1 6.3833 22 7.2833 22 8.3833ZM19 12.2933C19 12.0233 18.89 11.7733 18.71 11.5833L16.8 9.6733C16.61 9.4933 16.35 9.3833 16.09 9.3833H14C13.45 9.3833 13 9.8333 13 10.3833V16.3833C13 16.9333 13.45 17.3833 14 17.3833H18C18.55 17.3833 19 16.9333 19 16.3833V12.2933Z"
        fill={colorCode}
      />
    </svg>
  );
}
