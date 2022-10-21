import { Button as BtnStyled } from "./style";

interface ButtonProps {
  text: string,
  type: 'success' | 'danger' | 'alert',
  onClick?(): void,
}

const Button: React.FC<ButtonProps> = ({
  type = 'success', onClick, text
}) => {
  return (
    <BtnStyled
      color={type}
      onClick={() => { if (onClick) onClick() }}
    >
      {text}
    </BtnStyled>
  )
}

export default Button;