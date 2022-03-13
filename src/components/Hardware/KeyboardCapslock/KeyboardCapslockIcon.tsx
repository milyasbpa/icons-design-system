import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardCapslockIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardCapslockIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardCapslockIconProps) {
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
        d="M12 8.79331L15.89 12.6833C16.28 13.0733 16.91 13.0733 17.3 12.6833C17.69 12.2933 17.69 11.6633 17.3 11.2733L12.71 6.68331C12.32 6.29331 11.69 6.29331 11.3 6.68331L6.7 11.2733C6.31 11.6633 6.31 12.2933 6.7 12.6833C7.09 13.0733 7.72 13.0733 8.11 12.6833L12 8.79331ZM7 18.3833H17C17.55 18.3833 18 17.9333 18 17.3833C18 16.8333 17.55 16.3833 17 16.3833H7C6.45 16.3833 6 16.8333 6 17.3833C6 17.9333 6.45 18.3833 7 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
