import React from "react";
type Props = {
  title: string;
  type: "primary" | "secondary";
  logo?: React.ReactNode | Element;
  logoPosition: "left" | "right";
  size: "sm" | "md" | "lg";
};

const Button: React.FC<Props> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;
