import { ReactNode } from "react";

interface btnType extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  classButton: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export const ButtonAuth = ({ children, classButton, type, ...props }: btnType) => (
  <button className={classButton} type={type} {...props}>
    {children}
  </button>
);
