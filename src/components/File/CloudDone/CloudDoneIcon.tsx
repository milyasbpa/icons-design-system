import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICloudDoneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CloudDoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICloudDoneIconProps) {
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
        d="M19.35 10.4233C18.67 6.9733 15.64 4.3833 12 4.3833C9.11 4.3833 6.6 6.0233 5.35 8.4233C2.34 8.7433 0 11.2933 0 14.3833C0 17.6933 2.69 20.3833 6 20.3833H19C21.76 20.3833 24 18.1433 24 15.3833C24 12.7433 21.95 10.6033 19.35 10.4233ZM10.71 16.6733C10.32 17.0633 9.69 17.0633 9.3 16.6733L7.2 14.5833C6.81 14.1933 6.81 13.5633 7.2 13.1733C7.59 12.7833 8.22 12.7833 8.61 13.1733L10 14.5633L14.48 10.0833C14.87 9.6933 15.5 9.6933 15.89 10.0833C16.28 10.4733 16.28 11.1033 15.89 11.4933L10.71 16.6733Z"
        fill={colorCode}
      />
    </svg>
  );
}
