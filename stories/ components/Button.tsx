import Icon from "@/components/common/Icon";

export interface ButtonProps {
  text?: string;
  appearance?: "Subdued" | "Fill" | "Ghost" | "Critical" | "Accent";
  size?: "SM 32" | "MD 40" | "LG 48";
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
    size === "SM 32"
      ? "px-3 py-1 text-sm"
      : size === "MD 40"
        ? "px-5 py-3 text-lg"
        : size === "LG 48"
          ? "px-6 py-4 text-xl"
          : "px-4 py-2 text-base";

  const appearanceClasses =
    appearance === "Fill"
      ? "bg-black text-white"
      : appearance === "Subdued"
        ? "bg-white text-black"
        : appearance === "Ghost" ?
          "bg-white text-black" :
          appearance === "Critical" ?
            "text-white bg-[#FC351B]"
            : appearance === "Accent" ?
              "text-black bg-[#FFE943]"
              : "bg-white text-black";

  const roundedClasses =
    radius === "Default" ?
      "rounded-lg" :
      "rounded-[100px]";

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
    colorMode === "dark" ?
      true :
      false;
  return (
    <button
      className={`${colorModeClasses} ${typographyClasses} ${statusClasses} ${roundedClasses} ${sizeClasses} ${appearanceClasses} w-full flex font-fk-screamer items-center justify-center gap-2`}
      style={{
        backgroundColor: backgroundColor || undefined,
      }}
    >
      {leftIcon && <Icon name="search"/>}
      {text}
      {rightIcon && <Icon name="moveRight"/>}
    </button>
  );
};

export default Button;