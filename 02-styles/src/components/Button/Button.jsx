import { ActiveButton } from './Button.styled';

const Button = ({ children, flag }) => {
  return (
    <ActiveButton isActive={flag}>{children}</ActiveButton>
  );
};

export default Button;
