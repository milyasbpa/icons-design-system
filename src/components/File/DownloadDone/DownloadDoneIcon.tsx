import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDownloadDoneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DownloadDoneIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDownloadDoneIconProps) {
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
        d="M6 18.3832H18C18.55 18.3832 19 18.8332 19 19.3832C19 19.9332 18.55 20.3832 18 20.3832H6C5.45 20.3832 5 19.9332 5 19.3832C5 18.8332 5.45 18.3832 6 18.3832ZM11.01 14.2832C10.23 15.0532 8.97 15.0532 8.19 14.2732L6 12.0832C5.45 11.5332 5.46 10.6432 6.03 10.1132C6.57 9.59324 7.43 9.61324 7.95 10.1332L9.6 11.7832L16.03 5.35324C16.57 4.81324 17.44 4.81324 17.98 5.35324L18.02 5.39324C18.56 5.93324 18.56 6.81324 18.01 7.35324L11.01 14.2832Z"
        fill={colorCode}
      />
    </svg>
  );
}
