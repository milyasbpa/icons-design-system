import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardTabIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardTabIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardTabIconProps) {
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
        d="M12.29 8.5033L15.17 11.3833H2C1.45 11.3833 1 11.8333 1 12.3833C1 12.9333 1.45 13.3833 2 13.3833H15.17L12.29 16.2633C11.9 16.6533 11.9 17.2833 12.29 17.6733C12.68 18.0633 13.31 18.0633 13.7 17.6733L18.29 13.0833C18.68 12.6933 18.68 12.0633 18.29 11.6733L13.7 7.0833C13.31 6.6933 12.68 6.6933 12.29 7.0833C11.91 7.4733 11.9 8.1133 12.29 8.5033ZM20 7.3833V17.3833C20 17.9333 20.45 18.3833 21 18.3833C21.55 18.3833 22 17.9333 22 17.3833V7.3833C22 6.8333 21.55 6.3833 21 6.3833C20.45 6.3833 20 6.8333 20 7.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
