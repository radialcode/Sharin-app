export interface ButtonProps {
  text?: string;
  buttonClassName?: string;
  variant?: "primary" | "secondary";
  buttonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonClassName = "",
  variant = "primary",
  buttonStyle = "py-3 px-4 w-full font-black rounded-xl text-center cursor-pointer hover:bg-black/7 tracking-[-0.5%] transition-all duration-300",
}) => {
  const variantStyle =
    variant === "primary" ? "bg-[#F1F1F1]" : "bg-transparent";

  return (
    <button className={`${buttonStyle} ${variantStyle} ${buttonClassName}`}>
      {text}
    </button>
  );
};

export default Button;
