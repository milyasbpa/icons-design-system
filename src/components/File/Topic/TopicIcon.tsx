import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITopicIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TopicIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITopicIconProps) {
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
        d="M20 6.3833H12L10.59 4.9733C10.21 4.5933 9.7 4.3833 9.17 4.3833H4C2.9 4.3833 2.01 5.2833 2.01 6.3833L2 18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM13 16.3833H7C6.45 16.3833 6 15.9333 6 15.3833C6 14.8333 6.45 14.3833 7 14.3833H13C13.55 14.3833 14 14.8333 14 15.3833C14 15.9333 13.55 16.3833 13 16.3833ZM17 12.3833H7C6.45 12.3833 6 11.9333 6 11.3833C6 10.8333 6.45 10.3833 7 10.3833H17C17.55 10.3833 18 10.8333 18 11.3833C18 11.9333 17.55 12.3833 17 12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
