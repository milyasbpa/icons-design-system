import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface INotificationImportantIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NotificationImportantIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: INotificationImportantIconProps) {
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
        d="M12 23.3833C13.1 23.3833 13.99 22.4933 13.99 21.3933H10.01C10.01 22.4933 10.9 23.3833 12 23.3833ZM20.29 18.6733L19 17.3833V11.3833C19 8.0333 16.64 5.2333 13.5 4.5533V3.3833C13.5 2.5533 12.83 1.8833 12 1.8833C11.17 1.8833 10.5 2.5533 10.5 3.3833V4.5533C7.35999 5.2333 4.99999 8.0333 4.99999 11.3833V17.3833L3.70999 18.6733C3.07999 19.3033 3.51999 20.3833 4.40999 20.3833H19.58C20.48 20.3833 20.92 19.3033 20.29 18.6733ZM13 16.3833H11V14.3833H13V16.3833ZM13 11.3833C13 11.9333 12.55 12.3833 12 12.3833C11.45 12.3833 11 11.9333 11 11.3833V9.3833C11 8.8333 11.45 8.3833 12 8.3833C12.55 8.3833 13 8.8333 13 9.3833V11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
