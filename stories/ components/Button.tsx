export interface ButtonProps {
  text?: string;
  appearance?: "Subdued" | "Filled" | "Outline";
  size?: "SM" | "MD" | "LG" | "XL";
  status?: "Default" | "Hover" | "Pressed" | "Focus";
  leftIcon?: boolean;
  rightIcon?: boolean;
  backgroundColor?: string;
  colorMode?: string;
  radius?: string;
  typography?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  appearance = "Subdued",
  size = "MD",
  radius = "Auto (Default)",
  status = "Default",
  leftIcon = false,
  rightIcon = false,
  backgroundColor,
  typography,
  colorMode
}) => {
  const sizeClasses =
    size === "SM"
      ? "px-3 py-1 text-sm"
      : size === "LG"
        ? "px-5 py-3 text-lg"
        : size === "XL"
          ? "px-6 py-4 text-xl"
          : "px-4 py-2 text-base";

  const appearanceClasses =
    appearance === "Filled"
      ? "bg-black text-white"
      : appearance === "Outline"
        ? "border border-black text-black"
        : "bg-gray-200 text-black";

  const roundedClasses =
    radius === "Hover" ?
      "rounded-full" :
      radius === "Square" ?
        "rounded-none" :
        "rounded-md";

  const statusClasses =
    status === "Hover" ?
      "hover:opacity-80" :
      status === "Pressed" ?
        "active:opacity-60" :
        status === "Focus" ?
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" :
          "";

  const typographyClasses =
    typography === "Mobile" ?
      "text-sm" :
      typography === "Large Display" ?
        "text-xl" :
        "text-base";
  const colorModeClasses =
    colorMode === "Auto (Dark)" ?
      "dark" :
      "";
  return (
    <button
      className={`${colorModeClasses} ${typographyClasses} ${statusClasses} ${roundedClasses} ${sizeClasses} ${appearanceClasses} rounded-lg`}
      style={{
        backgroundColor: backgroundColor || undefined,
      }}
    >
      {leftIcon && <span>⬅</span>}
      {text}
      {rightIcon && <span>➡</span>}
    </button>
  );
};

export default Button;
