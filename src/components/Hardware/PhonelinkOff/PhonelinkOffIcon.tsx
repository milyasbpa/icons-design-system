import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPhonelinkOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhonelinkOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPhonelinkOffIconProps) {
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
        d="M24 19.3833V9.3833C24 8.8333 23.55 8.3833 23 8.3833H17C16.45 8.3833 16 8.8333 16 9.3833V12.9933L18 14.9933V10.3833H22V17.3833H20.39L23.32 20.3133C23.71 20.1833 24 19.8233 24 19.3833ZM21 6.3833C21.55 6.3833 22 5.9333 22 5.3833C22 4.8333 21.55 4.3833 21 4.3833H7.39L9.39 6.3833H21ZM1.36 2.5933C0.97 2.9833 0.97 3.6133 1.36 4.0033L2.47 5.1133C2.18 5.4633 2 5.9033 2 6.3833V17.3833H1.5C0.67 17.3833 0 18.0533 0 18.8833C0 19.7133 0.67 20.3833 1.5 20.3833H17.73L19.37 22.0233C19.76 22.4133 20.39 22.4133 20.78 22.0233C21.17 21.6333 21.17 21.0033 20.78 20.6133L2.77 2.5933C2.38 2.2033 1.75 2.2033 1.36 2.5933ZM4 17.3833V6.6533L14.73 17.3833H4Z"
        fill={colorCode}
      />
    </svg>
  );
}
