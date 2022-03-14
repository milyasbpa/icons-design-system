import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICloudOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CloudOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICloudOffIconProps) {
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
        d="M24 15.3833C24 12.7433 21.95 10.6033 19.35 10.4233C18.67 6.9733 15.64 4.3833 12 4.3833C10.67 4.3833 9.42998 4.7433 8.34998 5.3533L9.83998 6.8433C10.51 6.5533 11.23 6.3833 12 6.3833C15.04 6.3833 17.5 8.8433 17.5 11.8833V12.3833H19C20.66 12.3833 22 13.7233 22 15.3833C22 16.3733 21.52 17.2333 20.79 17.7833L22.2 19.1933C23.29 18.2733 24 16.9233 24 15.3833ZM3.70998 4.9433C3.31998 5.3333 3.31998 5.9633 3.70998 6.3533L5.76998 8.4133H5.34998C2.06998 8.7633 -0.410016 11.7533 0.0599837 15.2033C0.459984 18.2233 3.18998 20.3833 6.21998 20.3833H17.73L19.02 21.6733C19.41 22.0633 20.04 22.0633 20.43 21.6733C20.82 21.2833 20.82 20.6533 20.43 20.2633L5.11998 4.9433C4.72998 4.5533 4.09998 4.5533 3.70998 4.9433ZM5.99998 18.3833C3.78998 18.3833 1.99998 16.5933 1.99998 14.3833C1.99998 12.1733 3.78998 10.3833 5.99998 10.3833H7.72998L15.73 18.3833H5.99998Z"
        fill={colorCode}
      />
    </svg>
  );
}
