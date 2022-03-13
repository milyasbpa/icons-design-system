import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISpeakerGroupIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SpeakerGroupIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISpeakerGroupIconProps) {
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
        d="M18.2 1.3833H9.8C8.81 1.3833 8 2.1933 8 3.1833V17.5833C8 18.5733 8.81 19.3733 9.8 19.3733L18.2 19.3833C19.19 19.3833 20 18.5733 20 17.5833V3.1833C20 2.1933 19.19 1.3833 18.2 1.3833ZM14 3.3833C15.1 3.3833 16 4.2733 16 5.3833C16 6.4933 15.1 7.3833 14 7.3833C12.9 7.3833 12 6.4933 12 5.3833C12 4.2733 12.9 3.3833 14 3.3833ZM14 16.8833C11.79 16.8833 10 15.0933 10 12.8833C10 10.6733 11.79 8.8833 14 8.8833C16.21 8.8833 18 10.6733 18 12.8833C18 15.0933 16.21 16.8833 14 16.8833Z"
        fill={colorCode}
      />
      <path
        d="M14 15.3833C15.3807 15.3833 16.5 14.264 16.5 12.8833C16.5 11.5026 15.3807 10.3833 14 10.3833C12.6193 10.3833 11.5 11.5026 11.5 12.8833C11.5 14.264 12.6193 15.3833 14 15.3833Z"
        fill={colorCode}
      />
      <path
        d="M5 5.3833C4.45 5.3833 4 5.8333 4 6.3833V21.3833C4 22.4833 4.89 23.3833 6 23.3833H15C15.55 23.3833 16 22.9333 16 22.3833C16 21.8333 15.55 21.3833 15 21.3833H7C6.45 21.3833 6 20.9333 6 20.3833V6.3833C6 5.8333 5.55 5.3833 5 5.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
