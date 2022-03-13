import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDeveloperBoardIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DeveloperBoardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDeveloperBoardIconProps) {
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
        d="M22 8.3833C22 7.8333 21.55 7.3833 21 7.3833H20V5.3833C20 4.2833 19.1 3.3833 18 3.3833H4C2.9 3.3833 2 4.2833 2 5.3833V19.3833C2 20.4833 2.9 21.3833 4 21.3833H18C19.1 21.3833 20 20.4833 20 19.3833V17.3833H21C21.55 17.3833 22 16.9333 22 16.3833C22 15.8333 21.55 15.3833 21 15.3833H20V13.3833H21C21.55 13.3833 22 12.9333 22 12.3833C22 11.8333 21.55 11.3833 21 11.3833H20V9.3833H21C21.55 9.3833 22 8.9333 22 8.3833ZM17 19.3833H5C4.45 19.3833 4 18.9333 4 18.3833V6.3833C4 5.8333 4.45 5.3833 5 5.3833H17C17.55 5.3833 18 5.8333 18 6.3833V18.3833C18 18.9333 17.55 19.3833 17 19.3833ZM6.5 13.3833H10.5C10.78 13.3833 11 13.6033 11 13.8833V16.8833C11 17.1633 10.78 17.3833 10.5 17.3833H6.5C6.22 17.3833 6 17.1633 6 16.8833V13.8833C6 13.6033 6.22 13.3833 6.5 13.3833ZM12.5 7.3833H15.5C15.78 7.3833 16 7.6033 16 7.8833V9.8833C16 10.1633 15.78 10.3833 15.5 10.3833H12.5C12.22 10.3833 12 10.1633 12 9.8833V7.8833C12 7.6033 12.22 7.3833 12.5 7.3833ZM6.5 7.3833H10.5C10.78 7.3833 11 7.6033 11 7.8833V11.8833C11 12.1633 10.78 12.3833 10.5 12.3833H6.5C6.22 12.3833 6 12.1633 6 11.8833V7.8833C6 7.6033 6.22 7.3833 6.5 7.3833ZM12.5 11.3833H15.5C15.78 11.3833 16 11.6033 16 11.8833V16.8833C16 17.1633 15.78 17.3833 15.5 17.3833H12.5C12.22 17.3833 12 17.1633 12 16.8833V11.8833C12 11.6033 12.22 11.3833 12.5 11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
