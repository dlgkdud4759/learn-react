import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  bgColor?: string;
}

function Button({
  children,
  type = "button",
  onClick: handleClick,
  bgColor,
  ...props
}: ButtonProps) {
  return (
    <button
      className="rounded-button"
      type={type}
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
