import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVideogameAssetIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VideogameAssetIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVideogameAssetIconProps) {
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
        d="M21 6.3833H3C1.9 6.3833 1 7.2833 1 8.3833V16.3833C1 17.4833 1.9 18.3833 3 18.3833H21C22.1 18.3833 23 17.4833 23 16.3833V8.3833C23 7.2833 22.1 6.3833 21 6.3833ZM10 13.3833H8V15.3833C8 15.9333 7.55 16.3833 7 16.3833C6.45 16.3833 6 15.9333 6 15.3833V13.3833H4C3.45 13.3833 3 12.9333 3 12.3833C3 11.8333 3.45 11.3833 4 11.3833H6V9.3833C6 8.8333 6.45 8.3833 7 8.3833C7.55 8.3833 8 8.8333 8 9.3833V11.3833H10C10.55 11.3833 11 11.8333 11 12.3833C11 12.9333 10.55 13.3833 10 13.3833ZM15.5 15.3833C14.67 15.3833 14 14.7133 14 13.8833C14 13.0533 14.67 12.3833 15.5 12.3833C16.33 12.3833 17 13.0533 17 13.8833C17 14.7133 16.33 15.3833 15.5 15.3833ZM19.5 12.3833C18.67 12.3833 18 11.7133 18 10.8833C18 10.0533 18.67 9.3833 19.5 9.3833C20.33 9.3833 21 10.0533 21 10.8833C21 11.7133 20.33 12.3833 19.5 12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
