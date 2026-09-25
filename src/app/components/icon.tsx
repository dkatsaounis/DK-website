import type { IconName, IconSize } from "~/interfaces/icon.interface";
import "~/styles/icons.css";

interface IconProps {
  size?: IconSize;
  name: IconName;
  color?: string;
}

export default function Icon(props: IconProps) {
  const { name, size, color } = props;
  return (
    <span
      className={`icon icon-${name} ${size ?? "medium"}`}
      style={{ backgroundColor: color ?? "var(--color-gray-300)" }}
    />
  );
}
