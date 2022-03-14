import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITextSnippetIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextSnippetIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITextSnippetIconProps) {
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
        d="M14.17 3.3833H5C3.9 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V10.2133C21 9.6833 20.79 9.1733 20.41 8.8033L15.58 3.9733C15.21 3.5933 14.7 3.3833 14.17 3.3833ZM8 15.3833H16C16.55 15.3833 17 15.8333 17 16.3833C17 16.9333 16.55 17.3833 16 17.3833H8C7.45 17.3833 7 16.9333 7 16.3833C7 15.8333 7.45 15.3833 8 15.3833ZM8 11.3833H16C16.55 11.3833 17 11.8333 17 12.3833C17 12.9333 16.55 13.3833 16 13.3833H8C7.45 13.3833 7 12.9333 7 12.3833C7 11.8333 7.45 11.3833 8 11.3833ZM8 7.3833H13C13.55 7.3833 14 7.8333 14 8.3833C14 8.9333 13.55 9.3833 13 9.3833H8C7.45 9.3833 7 8.9333 7 8.3833C7 7.8333 7.45 7.3833 8 7.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
