import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAttachEmailIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AttachEmailIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAttachEmailIconProps) {
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
        d="M21 10.3833V4.3833C21 3.2833 20.1 2.3833 19 2.3833H3C1.9 2.3833 1.01 3.2833 1.01 4.3833L1 16.3833C1 17.4833 1.9 18.3833 3 18.3833H14V13.3833C14 11.7233 15.34 10.3833 17 10.3833H21ZM11.53 11.0533C11.21 11.2533 10.79 11.2533 10.47 11.0533L3.4 6.6333C3.15 6.4733 3 6.2033 3 5.9133C3 5.2433 3.73 4.8433 4.3 5.1933L11 9.3833L17.7 5.1933C18.27 4.8433 19 5.2433 19 5.9133C19 6.2033 18.85 6.4733 18.6 6.6333L11.53 11.0533Z"
        fill={colorCode}
      />
      <path
        d="M22 14.3833C21.45 14.3833 21 14.8333 21 15.3833V18.3833C21 19.4833 20.1 20.3833 19 20.3833C17.9 20.3833 17 19.4833 17 18.3833V13.8833C17 13.6033 17.22 13.3833 17.5 13.3833C17.78 13.3833 18 13.6033 18 13.8833V17.3833C18 17.9333 18.45 18.3833 19 18.3833C19.55 18.3833 20 17.9333 20 17.3833V13.8833C20 12.5033 18.88 11.3833 17.5 11.3833C16.12 11.3833 15 12.5033 15 13.8833V18.3833C15 20.5933 16.79 22.3833 19 22.3833C21.21 22.3833 23 20.5933 23 18.3833V15.3833C23 14.8333 22.55 14.3833 22 14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
