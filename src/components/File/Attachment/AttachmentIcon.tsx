import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IAttachmentIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AttachmentIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IAttachmentIconProps) {
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
        d="M17.75 16.3833H7.16999C5.07999 16.3833 3.21999 14.8533 3.01999 12.7733C2.78999 10.3933 4.65999 8.3833 6.99999 8.3833H19.36C20.67 8.3833 21.86 9.3233 21.99 10.6233C22.14 12.1233 20.97 13.3833 19.5 13.3833H8.99999C8.44999 13.3833 7.99999 12.9333 7.99999 12.3833C7.99999 11.8333 8.44999 11.3833 8.99999 11.3833H17.75C18.16 11.3833 18.5 11.0433 18.5 10.6333C18.5 10.2233 18.16 9.8833 17.75 9.8833H9.13999C7.82999 9.8833 6.63999 10.8233 6.50999 12.1233C6.35999 13.6233 7.52999 14.8833 8.99999 14.8833H19.33C21.42 14.8833 23.28 13.3533 23.48 11.2733C23.71 8.8833 21.84 6.8833 19.5 6.8833H7.22999C4.35999 6.8833 1.78999 8.9833 1.51999 11.8433C1.21999 15.1333 3.77999 17.8833 6.99999 17.8833H17.75C18.16 17.8833 18.5 17.5433 18.5 17.1333C18.5 16.7233 18.16 16.3833 17.75 16.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
