import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardArrowIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardArrowIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardArrowIconProps) {
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
        d="M8.12 9.6733L12 13.5533L15.88 9.6733C16.27 9.2833 16.9 9.2833 17.29 9.6733C17.68 10.0633 17.68 10.6933 17.29 11.0833L12.7 15.6733C12.31 16.0633 11.68 16.0633 11.29 15.6733L6.7 11.0833C6.31 10.6933 6.31 10.0633 6.7 9.6733C7.09 9.2933 7.73 9.2833 8.12 9.6733V9.6733Z"
        fill={colorCode}
      />
    </svg>
  );
}
