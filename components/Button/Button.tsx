import React from "react";
import S from "../../styles/button.module.css";

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={S.button}>
      {children}
    </button>
  );
};

export default Button;
