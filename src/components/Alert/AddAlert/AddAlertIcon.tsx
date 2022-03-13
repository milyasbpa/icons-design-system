import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAddAlertIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddAlertIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAddAlertIconProps) {
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
        d="M12 23.3833C13.1 23.3833 13.99 22.4933 13.99 21.3933H10.01C10.01 22.4933 10.9 23.3833 12 23.3833ZM19 17.3833V11.3833C19 8.0333 16.64 5.2333 13.5 4.5533V3.3833C13.5 2.5533 12.83 1.8833 12 1.8833C11.17 1.8833 10.5 2.5533 10.5 3.3833V4.5533C7.35999 5.2333 4.99999 8.0333 4.99999 11.3833V17.3833L3.70999 18.6733C3.07999 19.3033 3.51999 20.3833 4.40999 20.3833H19.58C20.47 20.3833 20.92 19.3033 20.29 18.6733L19 17.3833ZM15 13.3933H13V15.3933C13 15.9433 12.55 16.3933 12 16.3933C11.45 16.3933 11 15.9433 11 15.3933V13.3933H8.99999C8.44999 13.3933 7.99999 12.9433 7.99999 12.3933V12.3833C7.99999 11.8333 8.44999 11.3833 8.99999 11.3833H11V9.3833C11 8.8333 11.45 8.3833 12 8.3833C12.55 8.3833 13 8.8333 13 9.3833V11.3833H15C15.55 11.3833 16 11.8333 16 12.3833V12.3933C16 12.9433 15.55 13.3933 15 13.3933Z"
        fill={colorCode}
      />
    </svg>
  );
}
