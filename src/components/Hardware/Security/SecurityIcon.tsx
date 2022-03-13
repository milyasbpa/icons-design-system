import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISecurityIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SecurityIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISecurityIconProps) {
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
        d="M11.19 1.7433L4.19 4.8533C3.47 5.1733 3 5.8933 3 6.6833V11.3833C3 16.9333 6.84 22.1233 12 23.3833C17.16 22.1233 21 16.9333 21 11.3833V6.6833C21 5.8933 20.53 5.1733 19.81 4.8533L12.81 1.7433C12.3 1.5133 11.7 1.5133 11.19 1.7433ZM12 12.3733H19C18.47 16.4933 15.72 20.1633 12 21.3133V12.3833H5V6.6833L12 3.5733V12.3733Z"
        fill={colorCode}
      />
    </svg>
  );
}
