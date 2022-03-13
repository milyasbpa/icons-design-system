import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISpeakerIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SpeakerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISpeakerIconProps) {
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
        d="M17 2.3833H7C5.9 2.3833 5 3.2833 5 4.3833V20.3833C5 21.4833 5.9 22.3733 7 22.3733L17 22.3833C18.1 22.3833 19 21.4833 19 20.3833V4.3833C19 3.2833 18.1 2.3833 17 2.3833ZM12 4.3833C13.1 4.3833 14 5.2833 14 6.3833C14 7.4833 13.1 8.3833 12 8.3833C10.89 8.3833 10 7.4833 10 6.3833C10 5.2833 10.89 4.3833 12 4.3833ZM12 20.3833C9.24 20.3833 7 18.1433 7 15.3833C7 12.6233 9.24 10.3833 12 10.3833C14.76 10.3833 17 12.6233 17 15.3833C17 18.1433 14.76 20.3833 12 20.3833ZM12 12.3833C10.34 12.3833 9 13.7233 9 15.3833C9 17.0433 10.34 18.3833 12 18.3833C13.66 18.3833 15 17.0433 15 15.3833C15 13.7233 13.66 12.3833 12 12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
