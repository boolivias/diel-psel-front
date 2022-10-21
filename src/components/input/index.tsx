import { ChangeEvent } from "react";
import { Container, Input, PText, TextArea } from "./style";

interface InputComponentProps {
  labelText?: string,
  placeholder?: string,
  type?: 'text' | 'date' | 'time' | 'textarea',
  enabled?: boolean,
  onChangeValue?(value: string): void,
  value?: string,
}

const InputComponent: React.FC<InputComponentProps> = ({
  labelText, placeholder, type = 'text', enabled = true, onChangeValue, value
}) => {

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (onChangeValue)
      onChangeValue(e.target.value)
  }

  return (
    <Container>
      {
        labelText && <PText>{labelText}</PText>
      }
      {
        type === 'textarea'
          ? (<TextArea value={value} disabled={!enabled} onChange={handleChange} />)
          : (<Input value={value} placeholder={placeholder} type={type} disabled={!enabled} onChange={handleChange} />)
      }
    </Container>
  )
}

export default InputComponent;
