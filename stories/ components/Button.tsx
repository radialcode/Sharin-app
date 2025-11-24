import { TEXT_TYPE } from "@/utils/constant";

export interface ButtonProps {
  text?: string;
  appearance?: "Subdued" | "Filled" | "Outline";
  size?: "SM" | "MD" | "LG" | "XL";
  status?: "Default" | "Hover" | "Pressed" | "Focus";
  leftIcon?: boolean;
  rightIcon?: boolean;
  backgroundColor?: string;
  radius?: string;
  typography?: string;
  colorMode?: TEXT_TYPE.LIGHT | TEXT_TYPE.DARK
}
const getAppearanceClasses = (appearance: string, colorMode: string) => {
  const isDark = colorMode === TEXT_TYPE.DARK;

  switch (appearance) {
    case "Filled":
      return isDark
        ? "bg-white text-black"    
        : "bg-black text-white";

    case "Outline":
      return isDark
        ? "border border-white text-white" 
        : "border border-black text-black";

    default: 
      return isDark
        ? "bg-gray-700 text-white"  
        : "bg-gray-200 text-black"; 
  }
};
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
  colorMode=TEXT_TYPE.LIGHT
}) => {
  const sizeClasses =
    size === "SM"
      ? "px-3 py-1 text-sm"
      : size === "LG"
        ? "px-5 py-3 text-lg"
        : size === "XL"
          ? "px-6 py-4 text-xl"
          : "px-4 py-2 text-base";

  

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
 
const appearanceClasses = getAppearanceClasses(appearance, colorMode);
  return (
    <button
      className={`${typographyClasses} ${statusClasses} ${roundedClasses} ${sizeClasses} ${appearanceClasses} rounded-lg`}
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
