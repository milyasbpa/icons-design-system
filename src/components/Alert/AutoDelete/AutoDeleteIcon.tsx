import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAutoDeleteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AutoDeleteIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAutoDeleteIconProps) {
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
        d="M16 9.3833C15.3 9.3833 14.63 9.4833 14 9.6733V7.3833C14 6.2833 13.1 5.3833 12 5.3833H4C2.9 5.3833 2 6.2833 2 7.3833V17.3833C2 18.4833 2.9 19.3833 4 19.3833H9.68C10.8 21.7433 13.21 23.3833 16 23.3833C19.87 23.3833 23 20.2533 23 16.3833C23 12.5133 19.87 9.3833 16 9.3833ZM16 21.3833C13.24 21.3833 11 19.1433 11 16.3833C11 13.6233 13.24 11.3833 16 11.3833C18.76 11.3833 21 13.6233 21 16.3833C21 19.1433 18.76 21.3833 16 21.3833Z"
        fill={colorCode}
      />
      <path
        d="M14 4.3833C14.55 4.3833 15 3.9333 15 3.3833C15 2.8333 14.55 2.3833 14 2.3833H11.5L10.79 1.6733C10.61 1.4933 10.35 1.3833 10.09 1.3833H5.91C5.65 1.3833 5.39 1.4933 5.21 1.6733L4.5 2.3833H2C1.45 2.3833 1 2.8333 1 3.3833C1 3.9333 1.45 4.3833 2 4.3833H14Z"
        fill={colorCode}
      />
      <path
        d="M15.75 12.3833C15.34 12.3833 15 12.7233 15 13.1333V16.8133C15 17.1733 15.19 17.4933 15.5 17.6733L18.02 19.1433C18.35 19.3333 18.77 19.2333 18.98 18.9233C19.21 18.5833 19.1 18.1133 18.74 17.9033L16.5 16.5833V13.1333C16.5 12.7233 16.16 12.3833 15.75 12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
