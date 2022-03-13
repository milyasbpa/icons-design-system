import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardVoiceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardVoiceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardVoiceIconProps) {
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
        d="M12 15.3833C13.66 15.3833 14.99 14.0433 14.99 12.3833L15 6.3833C15 4.7233 13.66 3.3833 12 3.3833C10.34 3.3833 9 4.7233 9 6.3833V12.3833C9 14.0433 10.34 15.3833 12 15.3833ZM18.08 12.3833C17.66 12.3833 17.31 12.6833 17.25 13.0933C16.88 15.7033 14.53 17.4833 12 17.4833C9.47 17.4833 7.12 15.7133 6.75 13.0933C6.69 12.6833 6.33 12.3833 5.92 12.3833C5.4 12.3833 5 12.8433 5.07 13.3533C5.53 16.3233 8.03 18.6533 11 19.1033V21.3833C11 21.9333 11.45 22.3833 12 22.3833C12.55 22.3833 13 21.9333 13 21.3833V19.1033C15.96 18.6733 18.47 16.3233 18.93 13.3533C19 12.8433 18.6 12.3833 18.08 12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
