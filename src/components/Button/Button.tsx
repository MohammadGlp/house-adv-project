type Button = React.ButtonHTMLAttributes<any>;

const Button: React.FC<React.PropsWithChildren & Button> = ({
  children,
  className,
  ...other
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-xl py-2 px-5 transition-all duration-200 ease-in-out ${className}`}
      {...other}
    >
      {children}
    </button>
  );
};
export default Button;
