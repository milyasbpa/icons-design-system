import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IHeadsetMicIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HeadsetMicIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IHeadsetMicIconProps) {
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
        d="M11.4 1.4033C6.62 1.7133 3 5.9033 3 10.6933V17.3833C3 19.0433 4.34 20.3833 6 20.3833H7C8.1 20.3833 9 19.4833 9 18.3833V14.3833C9 13.2833 8.1 12.3833 7 12.3833H5V10.6733C5 6.8333 7.96 3.4933 11.79 3.3833C15.76 3.2733 19 6.4433 19 10.3833V12.3833H17C15.9 12.3833 15 13.2833 15 14.3833V18.3833C15 19.4833 15.9 20.3833 17 20.3833H19V21.3833H13C12.45 21.3833 12 21.8333 12 22.3833C12 22.9333 12.45 23.3833 13 23.3833H18C19.66 23.3833 21 22.0433 21 20.3833V10.3833C21 5.2133 16.64 1.0633 11.4 1.4033Z"
        fill={colorCode}
      />
    </svg>
  );
}
