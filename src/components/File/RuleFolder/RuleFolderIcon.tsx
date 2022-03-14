import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IRuleFolderIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RuleFolderIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IRuleFolderIconProps) {
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
        d="M20 6.3833H12L10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.9 4.3833 2.01 5.2833 2.01 6.3833L2 18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM7.12 15.6733L5.71 14.2633C5.32 13.8733 5.32 13.2433 5.71 12.8533C6.1 12.4633 6.73 12.4633 7.12 12.8533L7.83 13.5633L10.66 10.7333C11.05 10.3433 11.68 10.3433 12.07 10.7333C12.46 11.1233 12.46 11.7533 12.07 12.1433L8.53 15.6833C8.14 16.0633 7.51 16.0633 7.12 15.6733ZM17.41 13.3833L18.29 14.2633C18.68 14.6533 18.68 15.2833 18.29 15.6733C17.9 16.0633 17.27 16.0633 16.88 15.6733L16 14.7933L15.12 15.6733C14.73 16.0633 14.1 16.0633 13.71 15.6733C13.32 15.2833 13.32 14.6533 13.71 14.2633L14.59 13.3833L13.71 12.5033C13.32 12.1133 13.32 11.4833 13.71 11.0933C14.1 10.7033 14.73 10.7033 15.12 11.0933L16 11.9733L16.88 11.0933C17.27 10.7033 17.9 10.7033 18.29 11.0933C18.68 11.4833 18.68 12.1133 18.29 12.5033L17.41 13.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
