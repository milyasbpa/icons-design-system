import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IErrorIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ErrorIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IErrorIconProps) {
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
        d="M12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM12 13.3833C11.45 13.3833 11 12.9333 11 12.3833V8.3833C11 7.8333 11.45 7.3833 12 7.3833C12.55 7.3833 13 7.8333 13 8.3833V12.3833C13 12.9333 12.55 13.3833 12 13.3833ZM13 17.3833H11V15.3833H13V17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
