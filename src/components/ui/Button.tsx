import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "orange" | "brown";
};

const Button: React.FC<ButtonTypes> = ({
  children,
  className,
  onClick,
  type = "brown",
}) => {
  return (
    <button
      className={`flex items-center justify-center
        h-[60px] w-full rounded-xl text-white text-lg ${
          type === "brown" ? "bg-button" : "orange-gradient"
        } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
